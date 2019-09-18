# NewsAggregator
What is News aggregator?
Created a news web page that crawls news from various websites and displays it on this website. This website is completely implementd on AWS platform.

How I created it?
I crawled the data from 3 various websites and stored the data as a csv file. Then created a DynamoDB table to store the data. Then created the DynamoDB table as the Backend for my website and used NodeJS and Javascript to build the website hosted on AWS EC2 instance. 

How to run the code?
Create a DyanmoDB table on AWS and then an EC2 instance. Run the sample_crawler_2 file. Then download the NodeJS on EC2 instance and run server.js file on the EC2 instance and you will see that the website is running on localhost port 3000.
