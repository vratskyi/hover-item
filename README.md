# hover-item
Hover any item  you want (in DOM)

After include this script just add ``id="hoverItem"`` to any DOM element wich you want to hover <br /> 
and replace ``pulseNeon`` to your CSS ``class`` <br /><br />

## Example



    <li
    id="hoverItem"
    class="bg-gradient-to-r flex justify-center items-center from-blue-500/30 to-purple-500/10 px-2 py-5 min-w-full h-full rounded-2xl transition-all duration-150 hover:shadow-2xl hover:shadow-indigo-500">
    <span class="text-white font-medium mr-2">Full Name:</span> Oleksii
    Vratskyi
    </li>

## Result
![enter image description here](https://vratsky.com/hoverItemGif.gif)

## CSS Class from example

    .pulseNeon  {
    	animation:  pulsate 1.5s  infinite  alternate;
    }
    // Animation
    @keyframes  pulsate  {
    100% {
    /* Larger blur radius */
    text-shadow:  0  0  4px  #ffffffc5,  0  0  11px  #ffffffc5,  0  0  19px  #ffffffc5,
    0  0  40px  #8b5cf6,  0  0  80px  #8b5cf6,  0  0  90px  #a855f7,  0  0  100px  #ec4899,
    0  0  150px  #f43f5e;
    }
    0% {
    /* Smaller blur radius */
    text-shadow:  0  0  4px  #f8abff,  0  0  11px  #f8abff,  0  0  19px  #f8abff,
    0  0  40px  #540bfd,  0  0  80px  #9a2eff,  0  0  90px  #9a2eff,  0  0  100px  #d61636,
    0  0  150px  #d61636;
    }
    }

## Enjoy 😇
