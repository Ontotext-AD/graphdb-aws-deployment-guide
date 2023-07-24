---
sidebar_position: 4
---

# Used IAM Roles and Policies

It is up to your corporate policies to determine, which roles and policies to create for your
environment. At a minimum, to deploy GraphDB Cluster on AWS, you will need to create an appropriate role to perform 
the steps required in the [deployment guide](../deployment-assets/DAS-001).

## Custom roles
The Terraform script creates a couple of custom roles:
Note that `ftr` is a prefix set by the `resource_name_prefix` variable.
* `ftr-graphdb-<data of creation>` which includes the following policies: 
  * **AmazonSSMFullAccess:** AWS managed policy, provides full access to Amazon SSM.
  * **AmazonInspector2FullAccess:** AWS managed policy, provides full access to Amazon Inspector and access to other
    related services such as organizations.
  * **ftr-graphdb-auto-join:** Custom policy required for forming a cluster: 
      ```json
      {
          "Version": "2012-10-17",
          "Statement": [
              {
                  "Action": "ec2:DescribeInstances",
                  "Effect": "Allow",
                  "Resource": "*",
                  "Sid": ""
              }
          ]
      }
      ```
  * **ftr-graphdb-s3-crud:** Custom policy allowing storing of backups in a S3 bucket
      ```json
      {
          "Version": "2012-10-17",
          "Statement": [
              {
                  "Action": [
                      "s3:ListBucket",
                      "s3:*Object"
                  ],
                  "Effect": "Allow",
                  "Resource": [
                      "arn:aws:s3:::ftr-graphdb-backup/*",
                      "arn:aws:s3:::ftr-graphdb-backup"
                  ],
                  "Sid": ""
              }
          ]
      }
      ```
* `s3-bucket-monitoring` which includes the following policies: 
    * **s3-bucket-monitoring:** Custom policy allowing Lambda functions to call AWS services on your behalf.
    ```json
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "SNSPublish",
                "Effect": "Allow",
                "Action": [
                    "sns:Publish"
                ],
                "Resource": "*"
            },
            {
                "Sid": "S3GetBucketACLandPolicy",
                "Effect": "Allow",
                "Action": [
                    "s3:GetBucketAcl",
                    "s3:GetBucketPolicy"
                ],
                "Resource": "*"
            },
            {
                "Sid": "S3PutBucketACLAccess",
                "Effect": "Allow",
                "Action": "s3:PutBucketAcl",
                "Resource": "arn:aws:s3:::*"
            },
            {
                "Sid": "LambdaBasicExecutionAccess",
                "Effect": "Allow",
                "Action": [
                    "logs:CreateLogGroup",
                    "logs:CreateLogStream",
                    "logs:PutLogEvents"
                ],
                "Resource": "*"
            }
        ]
    }
    ```  
