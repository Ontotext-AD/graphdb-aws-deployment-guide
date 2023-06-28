---
sidebar_position: 1
---

# (DSEC-002) Root privileges guidance

To maintain the security of your AWS resources, it is recommended to follow these IAM best practices:
* **Avoid using the AWS Root User Access Key**: It is advisable not to utilize the AWS Root User Access Key for regular operations to minimize the risk of unauthorized access.
* **Minimize use of the AWS Root User account**: Instead of relying on the AWS Root User account, create a separate AWS admin account dedicated to performing administrative tasks. This helps limit the exposure and potential impact of any security incidents.
* **Create individual IAM User accounts**: Assign each team member their own individual IAM User account, enabling them to perform their specific duties. This allows for better accountability and traceability of actions taken within the AWS environment.
* **Follow the principle of least privileges**: When granting access to IAM User accounts, adhere to the principle of least privileges. Only provide permissions necessary for users to fulfill their assigned responsibilities, reducing the risk of unauthorized actions.
* **Utilize IAM Groups**: Rather than granting permissions directly to individual IAM users, create IAM Groups and assign permissions to these groups. Add IAM users to the appropriate groups based on their job functions, simplifying permission management and ensuring consistent access control.

Here are some examples of IAM Groups that can be created:

* **Admin**: Grants full administrator access to the AWS environment, allowing users to perform all actions, including delegation of permissions to all services and resources.
* **Read Only**: Provides read-only access to specified AWS services.
* **Support**: Enables users to raise AWS Support requests.
* **Billing**: Grants access to billing materials such as cost breakdowns and invoices.
* **SecurityAudit**: Facilitates monitoring of IAM accounts for compliance with corporate security policies. Members of this group can access logs and events to investigate potential security breaches or malicious activities.
* **API**: Provides programmatic access to AWS services.

It is important to note that the IAM Root User is not required for deploying GraphDB on AWS. Following best practices, it is recommended to avoid using the IAM Root User for any part of this deployment.
