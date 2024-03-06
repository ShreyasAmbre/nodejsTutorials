*** Nodejs Notes ***
1. Nodejs installation and Setup
=> Go to Offical website of node, download the Recommended version of node
=> Install it simply pressing next and after installation open new CMD and 
enter node -v & npm -v to check the verison of installed node 

1. NodeJs REPL -> ref. file (index.js)
=> The REPL is a feature of nodejs where it is useful in expirements
with Nodejs codes & to debug javascript codes.
=> To demonstarte REPL feature on nodejs go to cmd and type node and hit enter. 
=> Read :- Read user input, parse that input into javascript data structure 
        and store in memory.
=> Eval :- Takes and evaluate the data structure
=> Print :- Print the result
=> Loop :- Perform above command until user presses ctrl+c twice
 

2. Nodejs Core Modules (File System as fs)-> ref. file (fileSystemCoreModule.js)
=> Consider modules to be same as javascript libraries. A set of 
funcitons your want to include in your application
=> Node.js as set of Built-In modules which you can use without
any other installation 
=> File System (One of the core module in Nodejs)    
    :- fs is FileSystem core module in nodejs which helps use to read, write, 
    create, update & delete file.
    :-  fs.writeFileSync('file_name', 'data') 
        1. It check file is present on or not, If not it create a file and add data inside file.
        2. If file is already present it remove previos data and add new data inside file.
    :-  fs.appendFileSync('file_name', 'data')
        1. This method is use to update/add the data inside file it does not remove previos data it 
            just update/add new data inside that file      


3. Nodejs Core Module (Async File System as fs) -> ref. folder  (fsAsync)
=> To user Async we have to under Sync manner first
=> Lets have one example We have visited restaurent we gave an order to waiter
waiter goes to kitchen to drop the order until it is completed waiter waits and 
pickup the order once its is completed and serve us. Only then waiter is allowed to 
take a next order. So this flow is in syncronus form one after the other. 
=> But It has limitation it is time consuming if next task is not related to current 
task no need to wait here we can user Async way.
=> What  is Async mainly lets take one example we have gone to restaurent and 
waiter takes an order and then waiter does not wait for order to complete 
it directly goes to take an order from other table.

4. Nodejs Core Module - OS Module -> ref. file osMod.js

5. Nodejs Core Module - Path Module -> ref. pathMod.js

6. How to Import and Export Own Custom Modules -> ref inportExport Folder
