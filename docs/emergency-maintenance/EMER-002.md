---
sidebar_position: 2
---

# Recovering the Cluster

The GraphDB cluster relies on quorum-based replication, meaning that the cluster should have over 50% alive nodes 
to be able to execute INSERT/DELETE operations. 
This ensures that there will always be a majority of GraphDB nodes that always have up-to-date data.

## Recovering Individual Nodes

The following procedure describes how to recover one or multiple failed nodes:
1. Determine if quorum is impacted.
   * If there is not enough nodes to form a quorum, 
   consult the [Rebuilding the cluster from a single node](#rebuilding-the-cluster-from-a-single-node) procedure. 
2. If new nodes can be added with the previously used hostname or IP address 
   (depending on how the nodes were added to the cluster), then:
   * Start the new nodes with the same address or hostname.
   After this, the cluster should be able to determine that the nodes are available again 
   and start “catching” them up with missed updates.
   * If the volume from the failed node can be mounted to the new nodes, you should do so, 
   to avoid full replication from scratch, which could be time-consuming.
3. If nodes cannot reuse the previous IP address or hostname:
   * First remove the failed nodes from the cluster.
   * Add the new nodes to the cluster, it’s important to add all new nodes in a single rest call. 
   This will avoid building and sending a snapshot multiple times.
   Please note that this will trigger full replication, and it could be time-consuming depending on the size of the repository.   

## Rebuilding the Cluster from a Single Node
Sometimes, multiple nodes can fail or in other situations:
* nodes might be available,but cannot agree on the state of the cluster, 
* cannot agree, which the leader is, and the cluster will be in a deadlocked state, unable to process write or even read requests.

In such cases, the cluster can be rebuilt from a single node. 

Use the following procedure to rebuild the cluster from a single node:
1. Double check there is connectivity between the nodes.
2. Stop the GraphDB processes on all nodes. 
3. Determine the node with the highest number of processed transactions. 
   This corresponds to the log index maintained by GraphDB (Raft). 
   The steps to retrieve the log index for each node are as follows:
   * Get access to the nodes file system, where GraphDB stores its data.
   * Determine the size (in bytes) of `log.index` file. 
   The location of this file is relative to the configured GraphDB data directory and has the following path `raft/transaction-log/log.index`.
   * Use the following formula to calculate the log index (size_in_bytes / 33) - 1.
4. On all nodes, except for the one determined in step 3, delete the entire data directory of GraphDB.
5. On the node chosen in step 3, delete only the `raft/` subfolder of the data directory.
6. Start the GraphDB processes again.
7. Create the cluster again, but **make sure to issue the request to the node that was chosen in step 3**

For example, let's assume we have three nodes: `graphdb1.example.com`, `graphdb2.example.com` and `graphdb3.example.com`.
If you have determined that node `graphdb2.example.com` is the node with the highest number of processed transactions, 
the request should be: 

```shell
curl -X POST -H 'Content-type: application/json' \
    http://graphdb2.example.com:7200/rest/cluster/config \
    -d '{
        "nodes": [
            "graphdb1.example.com:7300",
            "graphdb2.example.com:7300",
            "graphdb3.example.com:7300"
        ]
    }'
```
   