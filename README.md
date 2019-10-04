# ArrayUtils App

This project started as a way of teasing my workmates.

And also a *vendetta*.

One of my workmates left his computer unlocked, opportunity I used to change his desktop's background to an image of "Dora the Explorer".

![](images/dora_the_explorer_wallpaper.jpg?raw=true)

Since that moment, we all block our computers before leaving them unattended, but whenever any of us forgets, we change his/her background. Having been me the first to change a background, now everybody blames me the first if they arrive at their computer and find their background changed.

When I forget to lock my computer I am also the victim of these attacks. One day, I opened my laptop and saw an big brown spider as my background (damn it!). These animals are the ones I **hate the most**. Furthermore, they started to send me images of spiders through instant messaging. That day, I reached my limit. I needed to think of a way to **stop all their annoying jokes**.

I didn't want to change the main theme of the joke, this is, changing the background, but now everybody locks their computer when they leave it unattended. **I had to find a alternative**.

So, let's see.. It would be awesome if I could change my colleagues backgrounds **remotely**. At my company, one of the products we develop is mobile apps. With Ionic, Angular and NodeJs. A-ha! NodeJs is known for its **poor security**. When you install a package from NPM, you don't know if what you are installing is safe or not, unless you examine its source code. Knowing this, I decided to create a NPM package and persuade my teammates to install it in their computers in a way I could execute, then, arbitrary commands. Those commands could range from changing the background, opening random windows, rebooting their computers unexpectedly to gathering information from their computers like user information, network information, SSH keys, etc.

So, let's go!

** Disclaimer 1: This is by no means a complex piece of software and I am not a cybersecurity expert. This can be interpreted as a commentary on how easy it is to introduce malware in other computers.

** Disclaimer 2: I have not and will not use the information gathered in this project for any evil purposes, if I use it at all.

## Details
![](images/diagram.png?raw=true)

The general idea is that there is a bunch of machines, a.k.a "victims", that sends some data to the server. The server receives the data sent by these machines and saves it in a database. Then, another machine acts as a client asking for data to the server and showing it to us, the attacker.

## Evolution of the project
- First phase: at first, due to my lack of experience and knowledge with Docker, I started working with two traditional VirtualBox machines connected between them through an internal network (in VirtualBox). One was an Express server which listened in `localhost:3000`. The other one was a JS script run with Node.js that gathered some information from the machine and sent it to the server. As the machines were connected to the same internal network, they could communicate between them.

- Second phase: having two virtual machines (with all the libraries, dependencies and resources they needed as a virtual machine) was detrimenting the performance of my host computer, so I decided to continue working only with one machine. (As I was making network and information gathering tests I wanted to be sure that I didn't screw up anything in my host computer). In this phase, I implemented the LowDB database. Once I had the client-server thing working, I needed a way to see the content of my database in an easy and, if possible, aesthetic way. Since a while, I had curiosity about Vue.js, so I took this opportunity to give it a try. So at the end of these phase I had a client(send)-server(save)-client(receive) architecture.

- Third phase: I needed more data to test my application, because data from my own virtual machine or only one different machine was not enough. What about launching **five** virtual machines only for executing a small script and send a small amount of data? My host computer would have explode if I had dare to do that. Another thing that had being in my mind was Docker. I had seen it and listen about it in so many places: what happened with it? I thought I could take again the opportunity to learn something new. It helped that at the same time we, at my company, had a basic training about
Docker. However, before starting to understand all the pieces of Docker I had to read an extensive amount of documentation and different resources. Luckily, there was much and good information on the internet and I could advance quite quickly, downloading images, building containers, running them, creating custom networks, assigning containers to that networks, creating custom Dockerfile and docker-compose.yml files, etc. So, I created a Dockerfile starting from a Node.js image, put in it my server and array-utils script (each one in a different container) and executed them. When you run a Docker container, you can connect some port of your host with another in the container. This way, if the server container exposed the `3000` port, I could connect my Vue.js client to that same port through the same or other port in my host (you can choose). Now, I could launch five "virtual machines" with only one command and consuming few resources! Nice! Magic!
