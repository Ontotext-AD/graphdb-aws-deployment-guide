---
sidebar_position: 8
---

# Data Encryption Configurations

## EBS Volumes
EBS volumes can be encrypted using the default AWS managed KMS key, or you can choose to encrypt the volume using a 
symmetric customer managed key that you created.

# S3 Buckets
When you configure default encryption for an Amazon S3 bucket, you can use any of the following types of encryption:
* Server-side encryption with Amazon S3 managed keys (SSE-S3) (the default)
* Server-side encryption with AWS Key Management Service (AWS KMS) keys (SSE-KMS)
* Dual-layer server-side encryption with AWS KMS keys (DSSE-KMS)

With the default option (SSE-S3), Amazon S3 uses one of the strongest block ciphers—256-bit Advanced Encryption Standard (AES-256)
to encrypt each object uploaded to the bucket. 
With SSE-KMS, you have more control over your key. 
If you use SSE-KMS, you can choose an AWS KMS customer managed key or use the default AWS managed key (aws/s3). 
SSE-KMS also provides you with an audit trail that shows when your KMS key was used and by whom.
With DSSE-KMS, Amazon S3 applies two individual layers of object-level encryption to satisfy compliance requirements 
for highly regulated customers.