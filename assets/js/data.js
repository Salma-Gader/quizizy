const question = [{
        question: ' Why is AWS more economical than traditional data centers for applications with varying compute workloads ? ',
        options: [
            { text: 'Amazon EC2 costs are billed on a monthly basis. ', correct: false },
            { text: 'Users retain full administrative access to their Amazon EC2 instances', correct: false },
            { text: 'Amazon EC2 instances can be launched on demand when needed.', correct: true },
            { text: 'Users can permanently run enough instances to handle peak workloads.', correct: false },
        ],
        explication: 'The ability to launch instances on demand when needed allows users to launch and terminate instances inresponse to a varying workload. This is a more economical practice than purchasing enough on-premises servers to handle the peak load.',
    },
    {
        question: ' Which AWS service would simplify the migration of a database to AWS?',
        options: [
            { text: 'AWS Storage Gateway' },
            { text: 'AWS Database Migration Service (AWS DMS).', correct: false },
            { text: 'Amazon EC2.', correct: true },
            { text: 'Amazon AppStream 2.0.', correct: false },
        ],
        explication: 'AWS DMS helps users migrate databases to AWS quickly and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database. AWS DMS can migrate data to and from most widely used commercial and open-source databases.',
    },
    {
        question: ' Which AWS offering enables users to find, buy, and immediately start using software solutions in their AWS environment?',
        options: [
            { text: 'AWS Config. ', correct: false },
            { text: 'AWS OpsWorks.', correct: false },
            { text: 'AWS SDK.', correct: false },
            { text: 'AWS Marketplace.', correct: true },
        ],
        explication: 'AWS Marketplace is a digital catalog with thousands of software listings from independent softwarevendors that makes it easy to find, test, buy, and deploy software that runs on AWS.',
    },
    {
        question: '  Which AWS networking service enables a company to create a virtual network within AWS?',
        options: [
            { text: 'AWS Config. ', correct: false },
            { text: ' Amazon Route 53.', correct: false },
            { text: 'AWS Direct Connect.', correct: false },
            { text: 'Amazon Virtual Private Cloud (Amazon VPC).', correct: true },
        ],
        explication: 'Amazon VPC lets users provision a logically isolated section of the AWS Cloud where users can launch AWS resources in a virtual network that they define.',
    },
    {
        question: ' Which of the following is an AWS responsibility under the AWS shared responsibility model?',
        options: [
            { text: 'Configuring third-party applications. ', correct: false },
            { text: 'Maintaining physical hardware .', correct: true },
            { text: 'Securing application access and data.', correct: false },
            { text: 'Managing guest operating systems.', correct: false },
        ],
        explication: 'Maintaining physical hardware is an AWS responsibility under the AWS shared responsibility model.',
    },
    {
        question: ' Which component of the AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery? ',
        options: [
            { text: 'AWS Regions. ', correct: false },
            { text: 'Edge locations.', correct: true },
            { text: 'Availability Zones.', correct: false },
            { text: 'Virtual Private Cloud (VPC).', correct: false },
        ],
        explication: 'To deliver content to users with lower latency, Amazon CloudFront uses a global network of points of presence (edge locations and regional edge caches) worldwide. ',
    },
    {
        question: ' How would a system administrator add an additional layer of login security to a users AWS Management Console? ',
        options: [
            { text: 'Use Amazon Cloud Directory. ', correct: false },
            { text: 'Audit AWS Identity and Access Management (IAM) roles.', correct: false },
            { text: ' Enable multi-factor authentication.', correct: true },
            { text: 'Enable AWS CloudTrail.', correct: false },
        ],
        explication: 'Multi-factor authentication (MFA) is a simple best practice that adds an extra layer of protection on top of a username and password. With MFA enabled, when a user signs in to an AWS Management Console, they will be prompted for their username and password (the first factor—what they know), as well as for an authentication code from their MFA device (the second factor—what they have). Taken together, these multiple factors provide increased security for AWS account settings and resources.',
    },
    {
        question: ' Which service can identify the user that made the API call when an Amazon EC2 instance is terminated ?',
        options: [
            { text: 'AWS Trusted Advisor. ', correct: false },
            { text: 'AWS CloudTrail.', correct: true },
            { text: 'AWS X-Ray.', correct: false },
            { text: 'AWS Identity and Access Management (AWS IAM).', correct: false },
        ],
        explication: 'AWS CloudTrail helps users enable governance, compliance, and operational and risk auditing of their AWS accounts. Actions taken by a user, role, or an AWS service are recorded as events in CloudTrail. Eventsinclude actions taken in the AWS Management Console,AWS Command Line Interface(CLI),and AWS SDKs and APIs.',
    },
    {
        question: ' Which service would be used to send alerts based on Amazon CloudWatch alarms?',
        options: [
            { text: 'Amazon Simple Notification Service (Amazon SNS). ', corect: true },
            { text: 'AWS CloudTrail.', correct: false },
            { text: ' AWS Trusted Advisor.', correct: false },
            { text: 'Amazon Route 53.', correct: false },
        ],
        explication: 'Amazon SNS and Amazon CloudWatch are integrated so users can collect, view, and analyze metrics forevery active SNS. Once users have configured CloudWatch for Amazon SNS, they can gain better insight into the performance of their Amazon SNS topics, push notifications, and SMS deliveries.',
    },
    {
        question: 'Where can a user find information about prohibited actions on the AWS infrastructure? ',
        options: [
            { text: 'AWS Trusted Advisor.', correct: false },
            { text: 'AWS Identity and Access Management (IAM).', correct: false },
            { text: 'AWS Billing Console.', correct: false },
            { text: 'AWS Acceptable Use Policy.', correct: true },
        ],
        explication: 'The AWS Acceptable Use Policy provides information regarding prohibited actions on the AWS infrastructure.',
    },

]