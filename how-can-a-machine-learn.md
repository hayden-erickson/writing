# How Can A Machine Learn?


If we want to understand how a machine learns it is best to start with how we
learn. Let's say we are trying to cook and we have never made
anything before. If we try cooking by ourselves we may mix all the ingredients,
add some seasoning, heat it up and voila, it tastes terrible. This is not
surprising because we have no experience making food and we don't know what
ingredients go well together. We also have no idea how long to cook the
ingredients. We will most likely want to try a recipe that is very simple. That
way if something goes wrong, it will not be hard to figure out what it was.
Let's say we want to make a baked potato, easy. For the sake of this example,
we're not going to season the potato (gross I know) and we're not going to
change the cook temperature. This makes for a very easy experiment. We only
have 1 variable which is how long we cook the potato! As with any experiment,
there are a few key points we need to keep in mind

| Independent variables | Dependent variable | Desired result | Hypothesis |
|----------------------|--------------------|-----------------|------------|
| cook time | texture of the potato | a soft baked potato | longer cook time = softer potato |

We can vary the cook time which will affect the texture and we want the texture
to be soft. We also have a hunch that the longer we cook the potato, the softer it will get.
We can test our hypothesis by cooking the potato for a set of intervals. For
instance we could put it in the oven for 10 minutes and then check how hard it
is. If it is hard we can put it back in for 10 more minutes and repeat the same
process.  On the second iteration, if the potato is softer then our hypothesis
is correct. In other words a longer cook time does equate to a softer potato.
This is not entirely rigorous to prove that our hypothesis is correct. We would
want to try and disprove the hypothesis. In other words, we would try to find a
case where cooking the potato actually makes it harder not softer. We can
continue with our intervals and see if the potato gets softer over time. 


If we want to teach our laptop to do something, we must follow a very
similar process. Let's say we want to classify an image. For instance, I want
to give my computer an image and have it tell me what is in it. Why would I
want to do this? I can look at the image already and find out what's in it.
I cannot however look at millions of images and write down what's in all of
them. Which again begs the question "why would I need to look at millions of
images?" Let's say you're searching for a baked potato recipe on the internet
(see what I did there), but you don't have google search. You can go to
wikipedia and look for baked potato recipes. Maybe you even remember the url
for a recipe website and you go there.  However, you are limited by what you
can explore. If you wanted to explore many different recipes across many
different sites you'd be working all day long. So we want to have some app that
can follow links on the internet, grab images that it finds, and tell us
whether the image contains a baked potato. If we let this run for some time, it
will eventually give us back a bunch of sites that contain images of baked
potatoes.

Now we have a value proposition. We want to save time hunting down recipes
and we ideally want to look at the finished product (the image) and see if it
looks appetizing. We have to teach our app how to take in an image and
determine whether it contains a baked potato, but how can we do this? We can
follow the same process we used in our experiment above. We just need to
reframe the variables.

Our input is an image much like our input before was a raw potato. Our
independent variable is an operation we can perform on the image and our
dependent variable is the classification (baked potato? yes or no). An
operation sounds very vague so think back to the cook time.


We performed an operation on the raw potato (cooking) to get a final result.
This operation can vary in time and ultimately changes the final texture of the
potato. The operation we perform on the image can be thought of as simply
multiplying or adding some numbers together. The numbers represent the pixel
values of the image.

Each pixel is just a number that tells us how much red, green, or blue this
tiny portion of the image should contain. So we can turn any image into a list
of numbers by taking the red, green, and blue values of each pixel and putting
them in a list. We can now multiply, divide, add, or anything we want
to this list of numbers.

The final result of our operation should give us a classification. Does this
image contain a baked potato? yes or no?  Just as we could change the amount of
time that we cook the potato, we can change the operations that we perform on
our image. The changes to these operations ultimately affect the output
classification (whether or not our model thinks there is a baked potato in the
image). In terms of the previous experiment we have this

| | Input | Independent variables | Dependent variable | Desired result / hypothesis |
|-|-------|----------------------|--------------------|-----------------------------|
| Before | raw potato | cook time | texture of the potato | a soft baked potato |
| After | image | add, subtract, multiply, divide | the answer we get out of our program | does the image contain a baked potato yes or no |

We have a way to compare our output to the desired result. Our app says "yes"
the image contains a baked potato, but we can clearly see an airplane. We
clearly need to change the operations we performed on our image because it's
not giving us the right answers. But how do we change the operations? It's easy
to tell if our model is wrong (it says yes when the answer should be no), but
we don't necessarily know HOW wrong it is. We could use accuracy as one
measure.  For instance, if there are 100 images of baked potatoes and our
program only said 35 were baked potatoes then we have a 35% accuracy. This
measure is often how models are evaluated. If one model gets 90% of the answers
right and another gets 50% right we definitely want to use the first one with
90% accuracy. But the accuracy of the answers we get does not tell us how we
should change the model. It would be like saying "Hey, you only made 20% of
your baked potatoes soft and this other person made 85%" That is certainly good
to know but we as individuals have no way to know why our percentage was lower
or what to do to change it. 

With the baked potato we had a linear relationship between the cook
time and the texture meaning that the longer we cook the potato, the softer it
gets. Therefore, if the potato is too hard, it needs more cook time. If the
potato is too soft, it needed less cook time.


## Why do we learn?


**Goal**
We don't just learn for the sake of itself. Ultimately we want to
accomplish something. With ML we must first identify what goal we want to
accomplish. Once we have fully defined the goal, the machine can learn to
carry it out automatically.


**Categorize**
note: The machines ultimate goal contains some human value such as
automatically classifying and image or a set of data into some category.
Spam or not? Pedestrian or not? Cyber attack or not? Cancer or not?


**Answer a Question**
note: Process some natural language to provide an answer that is as close as
possible to what you're looking for.


**Make a prediction**
note: What should I charge for my house given a bunch of real-estate related
variables such as location, house size, market value? Who will win the
presidential election?
## How Can A Machine Learn?


**Minimize Cost**
note: The way the machine can ultimately learn to accomplish a goal is by
minimizing a cost. Once the machine knows how good or bad it is doing at a
certain task (the cost), it can automatically adjust to get better. This
function represents the distance from a desired result. 


**Determine Effect**
note: The machine will perform operations on an input to ultimately get an
output. In other words, we give the machine some data such as an image or body
of text, the machine will perform some kind of mutation or processing on the input
data and produce an answer such as what category the input falls into or what
is the right amount to list that house for. Each of the operations has some
effect on the final output or answer that the machine gives us. The trick is to
determine two things. One is the direction of the effect. In other words, did
this operation bring us closer to or farther from the goal. Two is to determine
the magnitude of that effect. In other words, did this operation drastically
affect the output, or did it only have a small effect.


**Adjust Accordingly**
note: Based on the direction and magnitude of the effect each operation has, we
can modify the operation so that the end result is ultimately closer to what is
desired. In other words, make it so that our final cost or penalty is as small
as possible. 
## How Do We Determine Effect?
note: If we apply a series of operations to an input and get an ouput, how is
it that we go about determining the direction and magnitude of the effect each
operation has?


**As A Function**
```
training-data = [
  (image, correct-category),
  (image, correct-category),
  ...
]

machine(image) -> category-prediction
cost(category-prediction, correct-category) -> distance
```
note: The machine takes in some raw data and produces a prediction of some
kind. Before any learning has taken place, the prediction will be completely
wrong and mean nothing. But without the cost function, we can't make it better.
In order to determine the cost we must have a known or desired state. From the 
known state we can determine how close or far the given answer is from it.


**What Is Effect?**
note: It is important to realize that when we say "what is the effect that one
operation has" we are talking about slope. The slope of the function is the
amount which the input affects the output. For instance, if you're traveling at
10 miles / hour then we could have a graph of your position on the y-axis and
time on the x-axis. Every hour, you would have gone 10 more miles. The slope of
this line would be 10. For every 1 hour, your distance increases by 10 miles.
Since slope is rise / run and rise = distance and run = time, rise / run =
distance / time = miles / hour.


**Multiple Effects**
```
y = 2x 
dy/dx = 2

z = -5y
dz/dy = -5

dz/dy * dy/dx = dz/dx = -5(2) = -10
```
note: If we have two operations applied in a row then we can find out what
effect the first operation has on the output by multiplying it's slope by the
slope of the second function.



**Chain Rule**
```
a(v) -> w
b(w) -> x
c(x) -> y
d(y) -> z

b(a(v)) :
  v -> a(v) -> w -> b(w) -> x

c(b(a(v))) :
  v -> a(v) -> w -> b(w) -> x -> c(x) -> y

d(c(b(a(v)))) :
  v -> a(v) -> w -> b(w) -> x -> c(x) -> y -> d(y) -> z

dg/dv = dd/dc * dc/db * db/da * da/dv

```
note: The series of operations applied by the machine are sequential.
Therefore, the output of one operation is fed into the input of another.  If we
call the first two functions we get a new function which takes the input of the
first function and produces the output of the second. Using the chain rule, we
can determine the direction and magnitude of the effect of each operation.


**Applied To The Machine**
note: We want to determine what effect the operations had on the cost. So
if we can determine what effect the operations output had on the cost and
determine what effect the operations had on the operation output, then we can chain
these two values together and get the effect that the operations had on the
cost. This value has a magnitude (the slope) and a direction (positive or negative).
From these two points we can adjust each operation performed by the machine so that 
it produces an output closer to what is desired. 

