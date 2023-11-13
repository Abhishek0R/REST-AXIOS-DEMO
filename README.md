# REST-AXIOS-DEMO
Voting app where one can create posts and vote on it. Created using React showcasing REST API using Axios library

Voting app built as a continuation of the guide provided with editing option, upvoting and downvoting options added. 
Edit option utlises 'put' to edit the contents without changing the ID of the original post.

db.json file created to act as database where all the changes made in frontend will be reflected. 
URL passed is localhost:3000/posts wherein resides the major part of the content. The json server needs to be hosted in localhost:3000.

Upvote, downvote option enables users to vote and showcase their opinion on the posts which acts as an extension of update.

Axios library handles the fetching of database. 

npm install react-scripts --save 
may need to be run in case of react-scripts error.
