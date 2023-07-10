---
sidebar_position: 1
---

# Monitoring and health checks

**GraphDB documentation:**

* [Database health checks](https://graphdb.ontotext.com/documentation/10.2/database-health-checks.html)
* [Creating a cluster](https://graphdb.ontotext.com/documentation/10.2/creating-a-cluster.html#monitor-cluster-status)

## Monitoring a GraphDB Cluster

To ensure the health and status of your GraphDB cluster, you can utilize the provided REST endpoints to monitor 
both the entire cluster group and individual cluster nodes. 
This guide will walk you through the process of monitoring your GraphDB cluster.

### Endpoints

1. **Checking the Cluster Group Status:**

To check the status of the entire cluster group, you can send a GET request to the `/rest/cluster/group/status` endpoint of any node in the cluster.

For example:
```shell
curl http://graphdb1.example.com:7200/rest/cluster/group/status
```

* If the cluster group is functioning correctly, the response code will be 200, and you will receive a JSON response containing information about each node in the cluster group.
* The JSON response will include details such as the node address, endpoint URL, node state (LEADER or FOLLOWER), sync status with other nodes, and term information.

2. **Checking Individual Cluster Node Status:**

To monitor the status of a specific cluster node, send a GET request to the `/rest/cluster/node/status` endpoint of that node. 

For example:
```shell
curl http://graphdb1.example.com:7200/rest/cluster/node/status
```
* If the node is operational, the response code will be 200, and you will receive a JSON response containing information about that particular node.
* For a leader node, the response will include details such as the node address, endpoint URL, node state (LEADER), sync status with other nodes, and term information.
* For a follower node, the response will include similar details, but the node state will be indicated as FOLLOWER, and the sync status will be empty.

3. **Checking Repository Health:**

GraphDB provides a health check endpoint for monitoring repository health. You can access this endpoint at `http://graphdb1.example.com:7200/repositories/<repo_name>/health`.

For example:
```shell
curl http://graphdb1.example.com:7200/repositories/myrepo/health?
```

The response code will indicate the health status of the repository.
* **HTTP status 200:** The repository is healthy.
* **HTTP status 206:** The repository needs attention, but it is not critical.
* **HTTP status 500:** The repository is inconsistent, and some checks have failed.

The response JSON will provide detailed information about various health checks and their corresponding values.
* **repository-state:** Checks the state of the repository, with possible values of RUNNING, STARTING, or INACTIVE.
* **read-availability:** Checks if the repository is readable.
* **storage-folder:** Checks the availability of writable space in the storage folder.
* **long-running-queries:** Checks for queries running longer than a specified time.
* **predicates-statistics:** Checks if the predicate statistics contain correct values.
* **plugins:** Provides aggregated health checks for individual plugins.

The aggregated health checks also include checks for dependent services and components as plugins and connectors.
The response will provide information about the status of each component and any additional details or messages.

4. **Running Passive Health Checks:**

You can also perform passive health checks that compare the repository state to determine if it is safe to run active checks. 
* **Immediate Passive:** Append `?passive` to the health endpoint URL. If the repository state is RUNNING, an active check will be performed. Otherwise, a simple check listing the repository state will be returned.\
* **Delayed Passive (if needed):** Append `?passive=N` to the endpoint URL, where N is the timeout in seconds. The system will attempt to get the repository for up to N seconds. If successful, an active check will be performed. If the timeout occurs, a simple check listing the repository state will be returned

### Prometheus Integration with Cloudwatch

#### Prerequisites
The monitoring setup must start with the creation of a custom IAM role, 
which must include the AWS managed policy called “CloudWatchAgentServerPolicy”, 
this role must be assigned to all monitored instances:

1. Go to IAM section
2. Under Roles
   * Click on “Create role”.
   * Choose EC2 Service
   * Search for “CloudWatchAgentServerPolicy” and select it
   * Name your role
3. Assign the created role for your instances
   * Go to the EC2 section
   * Select the desired instances
   * Under the “Security” option choose “modify IAM role”
   * Choose your custom role

