---
sidebar_position: 1
---

# Handling fault conditions

When GraphDB is deployed in a cluster, it utilizes the RAFT consensus algorithm to effectively manage multiple GraphDB 
nodes and ensure data replication across all nodes. This enables high availability and fault tolerance in the cluster.

In a GraphDB cluster, if a fault occurs in one of the nodes, 
the remaining nodes in the cluster will continue to function and serve requests. 
The fault-tolerant nature of the cluster ensures that the system remains operational even in the presence of node failures.

However, if a node fails and does not recover within a reasonable timeframe, 
we recommend taking immediate action by opening a support case.
Our support team is dedicated to assisting you in diagnosing and resolving any issues that may arise in your GraphDB cluster.

To receive support, please refer to [How to receive support](../support/SUP-001) 

