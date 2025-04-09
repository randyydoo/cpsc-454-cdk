import { Function, Runtime, Code} from "aws-cdk-lib/aws-lambda";
import { Stack, StackProps } from "aws-cdk-lib";
import { Duration } from "aws-cdk-lib";
import { Construct } from "constructs";

export class LambdaStack extends Stack{
    public readonly handlerFunction: Function;

    constructor(scope: Construct, id: string, props?: StackProps){
        super(scope, id, props);
        this.handlerFunction = new Function(this, 'HandlerFunction', {
            runtime: Runtime.PYTHON_3_10,
            handler: 'handler.main',
            code: Code.fromAsset('stacks/lambda/function/my_deployment_package.zip'),
            timeout: Duration.seconds(45)
        })
    }
}