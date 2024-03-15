import boto3

def handler(event, context):
    print("Lambda triggered...")

    return {
        'statusCode': 200,
        'body': 'Folder created successfully'
    }