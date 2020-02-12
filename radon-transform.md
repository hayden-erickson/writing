[Home](./)

# How do we see inside our body

Well one very common way is using x ray images. These images are however,
inherently 2 dimensional and our bodies are obviously 3d. This makes
identifying anything inside the body very difficult and essentially guesswork.
Doctors need to use their intuition and knowledge of the structure of the body
to try and work out where something bad is happening. What if we could create
a full 3 dimensional image of the inside of our body without having to cut it
open. This would eliminate the need for doctors to guess where something bad is
happening or how severely the area is affected. This is where CT or CAT scans
come in. The acronym stands for Computed Tomography or Computerized Axial
Tomography. Tomography comes from the greek word tomos meaning slice or section
and the greek word graphia meaning to write or graphy as we now know it as a
way to create images (photography). Axial comes into play because we’re
actually rotating an x ray detector around the body to build up the 3d image.
The device has an x ray generator on one side of the circular frame and an
array of sensors directly opposite. The machine spins the generator and the
sensors in sync as a patient moves through the middle. We take this stuff for
granted today, but in 1979 this technology was so groundbreaking that it
actually won its creators Allan M Cormack and Godfrey Newbold Hounsfield the
nobel prize in physiology and medicine.

## Capturing

In order to understand what is actually happening when we capture a CT scan
we can start with a single x ray beam. Imagine a laser pointer that shoots x
rays (as terrifying as that may be). We can shine this laser pointer through
your body and record its brightness as it comes out the other side. As you
might imagine, the more stuff the laser goes through the darker it will be as
it exits your body. For instance shining just through your finger vs your
chest.
![alt text](./imgs/single-beam-shadow-2.gif 'Singe Beam Shadow')

This loss in brightness is called attenuation. This literally happens
because material in your body blocks some of the photons in the beam and is
exactly like a shadow. If visible light passes through a transparent material
some light gets through but you still see its shadow. If we scale this idea
further to multiple beams the shadow analogy becomes even clearer.

![alt text](./imgs/multiple-beam-shadow-2.gif 'Multiple Beam Shadows')

However, this only gives us a 1 dimensional image which is
not at all helpful. To gather more information we can rotate the beams and
capture another shadow from the new angle and repeat many times. This
rotation process creates an image called a sinogram and it looks a lot like a
sine wave. The sinogram is just a confusing looking version of the original
cross section, but all the data we need is there.

## Reconstructing

By running the entire process in reverse, we can construct an image of the
original cross section. Each column of the sinogram represents the shadow
created by someone’s body at a certain angle of rotation. Darker patches in
the shadow mean there was more stuff or more dense stuff in the way. If we
take a single column or shadow and smear it back following the same path its
beams took at that angle, we have essentially gone in reverse. If we do this
for every shadow and sum them all up, we get back an image of that person’s
body at that cross section. By taking many of these cross sections and
stacking them together we can create a full 3d image of someone’s insides and
find out exactly where something may be going wrong. Looking at a CT scanner,
you can now see why it is circular and why people are slowly moved through
it. The circle is required to take a picture of the x ray shadows at multiple
angles of rotation and the sliding is to capture multiple cross sections.
