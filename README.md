# angular-auto-save
Code to auto save content of page in every 5 seconds(time could be changed)

My new solution uses the $watch method that Angular provides for watching for changes to scope variables. I don’t want to make requests to the server with every keystroke, so I’ll use a simple debounce function (using Angular’s $timeout service) to limit my requests to happening every few seconds.

To implement this solution, there is nothing to add to your view. But in the controller, you’ll need to inject $timeout and write a couple $watch statement. I added a watch statement for each individual attribute of the model, but you could also do a deep watch of the entire model. This is slightly more expensive performance-wise.


