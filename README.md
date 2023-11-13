# REST-AXIOS-DEMO
Voting app where one can create posts and vote on it. Created using React showcasing REST API using Axios library

Voting app built as a continuation of the guide provided with editing option, upvoting and downvoting options added. 
Number below body of post indicates the votes for the post.
Edit option utilises 'put' to edit the contents without changing the ID of the original post.

db.json file created to act as database where all the changes made in frontend will be reflected. 
URL passed is localhost:3000/posts wherein resides the major part of the content. The json server needs to be hosted in localhost:3000.

Upvote, downvote option enables users to vote and showcase their opinion on the posts which aids in user interaction with other posts.

Axios library handles the fetching of database. 

npm run json:server

to start the json server 

npm install react-scripts --save 

may need to be run in case of react-scripts error.

![101](https://github.com/Abhishek0R/REST-AXIOS-DEMO/assets/129680199/d250e576-bd25-4975-9bd7-4dc99d752cc2)

![102](https://github.com/Abhishek0R/REST-AXIOS-DEMO/assets/129680199/e691892b-8e8d-43f8-ba4d-134cdeec6d5a)
