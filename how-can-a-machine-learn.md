[Home](./)

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
process.  On the second iteration, if (the potato is softer) then our hypothesis
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
wikipedia and look for baked potato recipes. Maybe you even remember the name
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

> As a side note, we could also have our computer learn to group the images of
> potatoes by similarity and preparation for instance.  Then instead of having
> to search through all the images our algorithm finds, we can just look at a
> few examples from each grouping. But we won't get into that in this article.

Our input is an image much like our input before was a raw potato. Our
independent variable is an operation we can perform on the image and our
dependent variable is the classification (baked potato? yes or no). In other
words, we can perform operations on the image and if we perform different
operations we get a different output. An operation sounds very vague so think
back to the cook time.


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

[try this out](./pixel-slider.html) 

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
or what to do to change it. The fact that 20% of our potatoes were soft and the
other 80% were too hard doesn't say anything about the cook time of an
individual potato. Accuracy will not do.

Let's change the problem slightly. What if instead of saying yes or no, our
program gave us a likelihood or a probability? For instance, the program could
say "I'm 85% sure this is a baked potato." Alternatively it could say "I'm 10%
sure this is a baked potato." From the programs confidence or likelihood we
might only keep those images which our program is more than 80% sure about.
Therefore, if we see an image with a baked potato and our program gives a value
of 85% then we know our program is off by 15% (100 - 85) because we are 100%
sure the image contains a potato. We now have some measure of how wrong the
guess is that our program gave us.

Why is this an important thing to know? We have already said that different
operations on the image lead to a different result. If we change the operations
we change the output. Therefore, if our model is off by some amount then we
know we need to change the operations, but HOW? By how much do we change each
operation? This final value of "how wrong we are" helps us to answer that
question. For instance, if our program is off by 50% then we need to change the
operations a lot. But, if it's only off by 10% we don't need to change the
operations much at all.

Back to cooking. We know there is a strong relationship between how long we
cook the potato and how soft it becomes. Let's say we cook the potato for 10
minutes (and we've never cooked anything before). We take it out and it's hard,
but we don't really have any measure of HOW hard so let's make one up. The
purpose of quantifying hardness is the same as before where we wanted to know
how wrong our program was. Perhaps we could use some weights. We can stack
weights on top of the potato and see how much weight it takes to squash the
potato. When the potato is finally flat, we simply write down how much weight
we used. Let's say if we cooked the potato for 10 minutes that it took 50
pounds to squash it.

Now we take another potato and cook it for twice the time (20 minutes) and we
find that it takes 25 pounds (half the weight) to squash. Just for good
measure, we take a third potato, cook it for 3 times as long and it takes 1/3
the original weight to squash (~16 pounds). Now we can determine a value for
the effect that cook time has on softness. In other words, how much does a
change in cook time affect the change in softness. For the first 2 potatoes we
changed the cook time by 10 minutes and the amount of weight changed by 25
pounds as a result (50 pounds originally - 25 after). So what if we just divide
the change in weight by the change in cook time? Therefore, we would have 25
pounds / 10 minutes. In other words 2.5 pounds / minute. This tells us that for
every 1 minute we cook the potato it takes 2.5 less pounds to squash it.

Ideally we do not want to use a lot of weight to squash the potato. If you
thing about taking a fork and stabbing it into the potato you don't want to use
a lot of force to do so. I imagine just smoothly cutting through it with no
problem. So we might say that our ideal state is that it takes 2 pounds to
squash the potato.

Now we have all the pieces we need to learn as a machine learns!!!

We cook the first potato for 10 minutes and it takes 50 pounds to squash. We
want it to only take 2 pounds to squash. So our first guess if off by 47.5
pounds or 47.5/50 = 95%. We know that for every minute we cook the potato it
will take us 2.5 less pounds to squash. If we simply add 1 to our cook time
over and over and eventually we will get there.

So how does all this junk relate back to the program learning how to classify
an image of a baked potato? If we give our program an image that we know
contains a potato and it thinks that there is a 40% chance of it being a potato
then we're off by 60%. We can arbitrarily change our operations a little bit and try again.
Now it might tell us there is a 60% chance. It just got better. Just like
before we could take the difference in the output (60 - 40 = 20%) and divide by
the difference in the operations we performed. That would tell us what effect
the change had on the output. Let's say that the operation we perform on the
pixel values of the image is to add a number. The number may have started at 10
which gave us an output of 40% potato likelihood. We then change the number to
20 and that gave us a 60% potato likelihood score. We could take the difference
in output (60% - 40%) = 20% and divide by the difference in the number we added
(20 - 10) = 10. This gives us 20% / 10 = 2. In other words, every time we
change the number we're adding to our pixels by +1 the likelihood of potato
score increases by 2%. So if we just keep adding 1 to our number that we add on
the pixels our program will continue to get better by 2%. In doing so, the
final answer will continue to get closer to 100%. 

Alternatively, if we give our program an image that does not contain a potato,
we would ideally want it to say there is a 0% chance of the image containing a
potato. We can repeat the same process as before slightly updating the
operation that we perform on the pixels then divide by the differences.
Ultimately if we hand our program an image of a potato it should give us a
score as close to 100% as possible and if we give it an image of a dog we want
it to be as close to 0% as possible.

This iterative process of slowly updating the operations that we perform on the
image is called training. Once our program has been trained to recognize baked
potatoes we could give it new images that it has never seen before and if we
did a good job our program will give us a high score. Now we can let our
trained program loose on the internet to find us images of baked potatoes!



