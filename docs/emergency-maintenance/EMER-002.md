---
sidebar_position: 2
---

# Recovering the cluster

## Recovering individual nodes

The following procedure describes how to recover one or multiple failed nodes:
1. Determine if quorum is impacted.
   * If there is not enough nodes to form a quorum, 
   consult the [Rebuilding the cluster from a single node](#rebuilding-the-cluster-from-a-single-node) procedure. 
2. If new nodes can be added with the same hostname or IP address (depending on how the nodes were added to the cluster), then:
   * Start the new nodes with the same address.
   After this, the cluster should be able to determine that the nodes are available again and start “catching” them up with missed updates.
   * If the data from the failed nodes can be made available to the new nodes, you should do so, 
   to avoid replicating everything from scratch, which could be time-consuming.
3. If nodes cannot be added with the addresses of the failed nodes:
   * First remove the failed nodes from the cluster
   * Add the new nodes to the cluster, it’s important to add all new nodes in a single rest call. 
   This will avoid building and sending a snapshot multiple times.

    
## Rebuilding the cluster from a single node
Sometimes, multiple nodes can fail or in other situations, nodes might be available, 
but cannot agree on the state of the cluster, or, which the leader is, and the cluster will be in a deadlocked state,
unable to process write or even read requests.

In such cases, the cluster can be rebuilt from a single node. 

Use the following procedure to rebuild the cluster from a single node:

1. Stop the GraphDB processes on all nodes. 
2. Determine the node with the highest number of processed transactions. 
   This corresponds to the log index maintained by GraphDB (raft). 
   The steps to retrieve the log index for each node are as follows:
   * Get access to the nodes file system, where GraphDB stores its data.
   * Determine the size (in bytes) of log.index file. 
   The location of this file is relative to the configured GraphDB data directory and has the following path `raft/transaction-log/log.index`.
   * Use the following formula to calculate the log index (size_in_bytes / 33) - 1.
3. On all nodes, except for the one determined in step 2, delete the entire data directory of GraphDB.
4. On the node chosen in step 2,  delete only the `raft/` subfolder of the data directory
5. Start the GraphDB processes again.
6. Create the cluster again, but make sure to issue the request to the node that was chosen in step 2
   