#LibraryServer

##Product Description
This is the front and back end code for Gray's original back end LibraryServer project that can be found here:
https://github.com/gdodgen/LibraryServer
Minor changes have been made on the backend.
This code is packaged onto Tomcat being run on an Amazon Linux EC2 Server which displays all of the books and allows a user to add/edit/delete books.
The data is connected to an Amazon RDS.  

##Jenkins
The project has one Jenkins pipeline called "Git Pull Pipeline"
When the pipeline is ran, Jenkins will do a pull request from the Library Server GitHub repo at:
https://github.com/yasmine-sorhovigarat/LibraryServer
It will then package the new code and deploy it on the Tomcat server.

##Setup
Clone the code onto your machine.
Requirements: Java 8 SDK, Maven 3.5.2, and Tomcat 9
Enter the folder and run mvn clean package.
Deploy the war file in the target folder on Tomcat's webapp folder.

##Home Page  
http://localhost:8080/LibraryServer/static/index.html
or
{ip-address}:{port}/LibraryServer/static/index.html

##Planned Improvements
1. Filter book results by author/genre/title.
2. Make the site more asthetically pleasing. 
3. Allow for checking in/out books by users.
4. Allow users to see which books they have checked out. 
5. Add due dates to books based on when the books are checked out.
6. Allow new users to create an account.  