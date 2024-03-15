# Lambda trigger on S3 file upload CDK stack


## Stack Components

- **Lambda Function**: Creates a Lambda function named `FileUploadLambdaHandler` using Python 3.11 runtime. This function is triggered by S3 object creation events and can perform custom logic such as processing or analyzing the uploaded files.

- **S3 Bucket**: Sets up an S3 bucket named `sample-bucket` with versioning enabled and public access blocked. The bucket is intended to store files and trigger the Lambda function when new objects are uploaded.

- **S3 Event Notification**: Configures an S3 event notification to trigger the Lambda function (`FileUploadLambda`) whenever an object is created in the S3 bucket.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template
