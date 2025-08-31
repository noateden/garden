---
title: 'State Machine - The World State'
description: 'The world is run by yesterday, today, and tomorrow. Machines have their states too!'
author: 'Eden'
date: 2022-04-01
#image: /assets/uploads/math.png
tag: Writing
---

Back to the year 2015 when I was learning about Computer Networks at the University. I have decided to write a motion detection application to finish my Network Communication class. The application is simple, I put a motion detection sensor on the table, and if there is any object that moves close to it, it detects and notifies my phone.

I have separated my application into two states idle and working. In the idle state, I simply put my application into an infinity loop where it was listening to events from the motion sensor. Once my application received events from the sensor, it transformed into the working state where it sent a notification to my phone over the internet.

At that time, I didn't have any ideas or a thesis to describe the algorithm I used in my application, I just put it to work as I expected. But now, I can tell you that my application is a simple sample of a state machine application. Today, we will talk more about it - the state machine!

# What is the state machine?

I really don't like to talk about theory here. In my thought, the state machine is a computer and program architecture where they have states and at a given time, they can work in only one state and only transform to another state when receiving inputs.

Let's talk about my sample application above, It has two states idle and working. It transforms from the idle state to the working state only when it receives events from the sensor and it transforms from the working state to the idle state only when it has already sent notifications to my phone.

```
                        receives events
+------------------+    from the sensor       +--------------+
|       Idle       | -----------------------> |   Working    |
|                  |                          |              |
| Listening events |                          | Send noties  |
| from the sensor  | <----------------------- | to my phone  |
+------------------+     sent notifications   +--------------+
						           
```

# In software development

We are programmers, and we may be familiar with regex expressions of course. To be honest, it was really painful sometimes, but it's really helpful. In regex expressions, we can use a finite state automaton (FSA) - a sub-model of the state machine to recognize if a set of inputs corresponds to an instance of our regular language. For example, we can use FSA to check if a given string, say "helloworld@gmail.com" is a valid email address or not. If you want to know more about how it works, thanks to Lj Miranda - he wrote a great post to explain it [here](https://ljvmiranda921.github.io/notebook/2022/10/07/finite-state-automata/).

Programming compilers are more complex state machine programs. In the first step, they transform regular source codes by using regex expressions and prepare for the next step - lexical analysis. Lexical analysis takes care of transforming the original source code (that’s a sequence of characters), into a sequence of substrings (called lexemes), each with its own class (such as keyword, operator, etc.). If you want to know more details about how a compiler works, I recommend you to read this amazing series that was written by Pietro from [here](https://pgrandinetti.github.io/compilers/).

Let's design a program that connects two computers and communicates with each other. We can easily image the program architecture and states as follows:

- In the beginning, there was no connection, so our program was in an idle state.
- When computer A requests to connect with computer B, our program transforms to the connecting state.
- When computer B accepts the connection from computer A, our program transforms to the connected state.
- When computer A starts to send data to computer B, our program transforms to the sending state.

We may need to define more states to fully support the communication of computer A and computer B. Are you familiar with this program? It definitely is the Internet TCP protocol that supports computer communication on the Internet and it is also a state machine.

# In the real world

Today, we live in a state-machine world where there are a lot of autonomous machines and devices, the perfect example is the vending machine. You can think about it have three states:

- Idle where it is doing nothing and waiting for you to input your coins.
- When it receives your coins, it transforms to the selection state where it is waiting for you to choose what are you buying.
- Once you choose your item, it transforms into the release state where it releases your chosen item. After that, it transforms back to the idle state.

When we are driving, our car and its machines are being a running state. When we stop the car, they back to the idle state. Of course, we can see a lot of other state machines like ATMs, or washing machines.

By looking at our world itself, it is a state machine as well. Every day, the world receives actions and events from humans, it produces them into results and memories, and transforms into the next state that is called tomorrow. Today is also a state and result of our world's transformation from yesterday. But carefully, the world is one-way state machine that can not be transformed to the previous state. So, pack our memories up and prepare for the next state. 🤪

# Is it the best architecture?

I can answer to you that it is, and it is not too, dependent on which software we are building, and which context we are using it.

For building autonomous machines, the state machine is the perfect fit architecture. By using a state machine, we completely define our machine's life cycle where we can know exactly what is the state of the machine, what inputs the machine needs, and what the machine does. For instance, let's say the vending machine, we know exactly that the machine only accepts buyer's coins as input, otherwise, it does nothing. And when the machine has coins, we know exactly that the machine will allow buyers to choose their item, no way the machine will do others.

However, let's think about our personal computer, let's say the Macbook. Do we know all states, inputs and what does our Macbook do? I think not. We are using multiple applications on our Macbook at the same time, and every application needs different inputs, does different works, and shows different results. If we break it down into tiny tasks, these tasks also can work with the state machine, but overall, at a given time, our Macbook can not work in the state machine architecture, it must work on multiple tasking architectures.

# We are working with state machine every day

If you are a front-end developer, have you ever considered your application or website to be a state machine? For example, the website waits for users' input by clicking the button, or inputting some text and the website starts to do some actions like validate inputs, or call API data, ... If you are working with some framework like React, or Redux, you really know what a state is. Krasimir Tsonev wrote an excellent article to describe how he thinks of state machine as a front-end developer [here](https://www.smashingmagazine.com/2018/01/rise-state-machines/).

As a data engineer, I think you already know exactly the importance of a state machine. Our database is a state at a given time, and it can be transformed to other states by doing some data manipulation transactions. At every state of the database, our data have specific relationships with others and we can completely revert the entry database into a specific state when we need to.

Maybe I don't need to talk about a state machine with embedded developers, they all know what it is, even they slept with it every night. Embedded developers create autonomous machines, and write automation codes every day, and they are all about state machines.

# Many thanks to

- [Lj Miranda](https://ljvmiranda921.github.io/notebook/2022/10/07/finite-state-automata/) for writing a great article to explain how regex expressions work.
- [Pietro Grandinetti](https://pgrandinetti.github.io/compilers/) for writing a amazing series about compilers.
- [Krasimir Tsonev](https://www.smashingmagazine.com/2018/01/rise-state-machines/) for writing an excellent article to describe how he thinks of state machine as a front-end developer.
