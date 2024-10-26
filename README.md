Assignment 3 report
This project is an interactive JavaScript-based quiz focused on Warhammer 40,000 trivia. The quiz includes three questions and provides feedback on the user's answers. It also tracks the user's progress, and displays the question count. The quiz requires a login before access, which was implemented with a basic “fake” authentication system. 

HTML implementation:
The HTML file includes a login form for authentication, the quiz form, and containers for displaying each question one at a time. Each question has radio button options for answers.

Javascript implementation:
In the JS file, a simple login form was implemented using a username: "warhammer" and a password: "40k". Only when the login info for the quiz is correct can one actually use the quiz. The JS file allows navigation through the quiz questions. The quiz displays one question at a time, hiding the previous question and showing the next. When the user reaches the final question, the "Next" button is replaced with a "Submit" button. Afterwards, the score is displayed so the user can see how much they got right.

Challenges faced:
I had trouble gathering the information from the quiz and implementing it into the JS file. I also had trouble putting that info from the JS file and displaying it for the user to see. These issues were eventually fixed. For the issues that were not fixed, I was unable to create a proper progress bar as the assignment asked. Secondly I was unable to create a button that allowed the user to redo the quiz without needing to refresh the page and login again. Finally, I was unable to show the user which questions did they get right or wrong specifically.