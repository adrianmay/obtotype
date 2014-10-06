obtotype
========

Experimenting with better use of prototypes

prototype.constructor is silly. If it must exist it should be set in the constructor so that prototypes can correctly have their own constructor. Given that, prototypes can be used as regular objects. But we're not going to construct them any more, rather, we'll clone or project them.

Cloning means making an exact and independent copy. It shares the `__proto__` of the clonee and has own properties which are deep copies of the clonee's own properties. Even basic typed properties must be copied.

Projecting means creating an object with the projectee as the prototype. Basic typed properties are not copied but JS will make a property in the projection as soon as an attempt is made to change the value. Until then, updates to the projectee's property are seen in the projection. Object-valued properties must be deep copied to prevent changes to their object valued properties affecting the prototype. For instance:

    p = { a:1, o: { b:2, c:3}}
    d = Object.create(p);
    d.a=10;
    d.o.b = 20;
    console.log(p.a + "," + p.o.b);

prints 1,20.

Sometimes we actually want a projection or clone to contain a reference to the same object that its original references and not a deep copy. Indeed the prototype itself is a case in point. To that end, properties with names beginning with $$ are not deep copied upon cloning or projecting. This distinction is only meaningful for object valued properties.

The uses of prototypes go way beyond inheritance. DarwinScript uses it for containment and we can also make an undo buffer this way. If prototypes know their referers we can also make a nice dirtying mechanism. Sample scripts will be written in the repo as examples.

Other prototype-based languages have more than one `__proto__`, e.g. Self has as many as you like and DarwinScript has one for inheritance and another for containment. In JS, we'd have to do this with multiplexers. A multiplexer starts off as an empty object and is then told to proxy for one delegate after another. It gives itself properties for everything in the delegate which explicitly delegate to them for read access. Write access shouldn't be delegated this far by the interpreter anyway.
 

