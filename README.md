# ArrayUtils App

*Note: this project started several years ago. Node.js has evolved since then.*

Node.js is known for its **poor security**. When you install a package from NPM, you don't know if what you are installing is **safe** or not, unless you examine its **source code**. Knowing this, I decided to create an **trojan** NPM package and persuade my teammates to install it in their computers. The package could change the background, open random windows, gather system information (like user  or network information), etc.

** Disclaimer 1: This is by no means a complex piece of software and I am not a cybersecurity expert. This can be interpreted as a commentary on how easy it is to introduce malware in other computers.

** Disclaimer 2: I have not and will not use the information gathered in this project for any evil purposes if I use it at all.

This project started as a way of teasing my workmates 😝.

## Details
![](images/diagram.png?raw=true)

The general idea is that there is a bunch of **victim machines** that send some data to the the **attacker's server**, which saves it in a database. The **attacker's client** is merely a visual interface for the database.

## Evolution of the project
**First phase**

I started with two traditional VirtualBox machines: one had a **Express server** listening at `localhost:3000`. The other run a **JS script** with Node.js to gather some information from the machine and sent it to the mentioned server. The machines were mutually visible because they were connected to the same internal network.

**Second phase**

Each virtual machine came with all the libraries, dependencies and resources it needed. That was decreasing the **performance** of my host computer, so I decided to work only with one machine. It would run the JS script and my host computer would host the Express server. I also created a **LowDB database**. Once I had the client-server relationship working, I wanted a way to **monitor** the content of my database in an easy and, if possible, **aesthetic** way. At that moment, I felt curious about **Vue.js**, so I gave it a try. At the end of this phase I had the following architecture: `victim_machine(send) <-> attacker_server(receive) <-> attacker_client(monitor)`.

**Third phase**

Data from only one machine was not enough. What if I launch **five virtual machines**? Just to execute a small script and send a small amount of data? My host computer couldn't cope with such a **resource intensive** task. I was curious about **Docker** and took again the chance to **learn something new**. It helped that too much time ago we had held a basic training about it at my company. I read an **extensive** amount of **documentation** and different resources. Luckily, there was much and good information on the internet and I could advance quite **quickly**: I learnt how to download images, build containers, run them, create custom networks, assign containers to those networks, create custom Dockerfile and `docker-compose.yml` files, etc. Now, I could launch five "virtual machines" with only one command and with a low resource consumption! Nice! Magic!


## How to launch
1. From root directory, execute:
`docker compose up --build`
2. Wait for the victim to send data. Its container will stop automatically
3. Open `http://localhost:3000` in any browser in your Docker host to see the gathered information.