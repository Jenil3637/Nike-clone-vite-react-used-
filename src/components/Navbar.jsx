import React from "react";
import "./navbar.css"

export default function Navbar () {
    
    return(
        <>
            <div className="Navbar">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAaVBMVEX///8AAAD8/Pzw8PDz8/Pa2tr4+Pi1tbXq6upMTEzi4uKtra1JSUnT09NxcXHn5+fMzMwNDQ2SkpI8PDzDw8NjY2NEREQbGxuLi4unp6ctLS0UFBRUVFQ3Nzeenp4yMjJ7e3uDg4MjIyOF1KOcAAAD2klEQVR4nO3aW7eyKhQGYMEDpWIeC01N/f8/8tN2jWVJZYra2ON9LtbdAqcwmYBpGgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAkujWDwByRmpv/QgqUEP363OQ6HPb2XyiGjZPE0Lc8DC3JWrPfRuzWLbPRERI5jkKnsOMjfmNTLTzWZicSTcosTW7NarthK/gqaZ0bbLQO5JO7nAlU90Q9RYDo8dhlTfXSIgXK1rCKMuYmpbGdXf9a5ZeXgT/RRLUvrKUtUkyewX5ihVX0eVMboLSnp8qd7QhQlljn9mlG5A/Tay09YRc1pll1DKchPSdEq62i7RdSJafZVQ/+GHxEMk5qm2lu0qq8W4pUdeglG5zxzs/REKypFT+CnW3zcBQdas99OCz+kieRDVTveWglIo2GZvFUkbnbU1sniPpSv0SW0HW9XRZpvx3xd0dBEJI4ijO+nt/edf6UX3+G3Ho5ZkkElLFC602lri2f1Q8fe3U2xeBLBISmovtzmOiPpi4KpqzNBASpNZypyY7URsMtVNZjtzs1Zb6577LWzeFOb8t48A8+cy6jknmze/jLX5fM7N574y2NTHcvx4ScsrF0lcUVnXv7FxOb8WwfaeSLlt3WZIufyT3//qbup1pAxH5u0DafKzZGue+3sRwJ0xogzuld3kfCclL31rjhjLu9Rl8O8/strjvX+f7fcCZudIF1sOOyf1ig2H5YSIv7o9qvlvu6R/Fjz2LkRN75yTHy8chaYUHdUfhj4qnzp0R/8NFdB4TCMlWWL964sGOI303vSk9OIMzyQvnfO07uGT4EOLFFLd0O65PIyMJomrhUj9kR5IHifxhOG1xLz9Ukp4mD7smVr2Dp1oo39d6jO/+nqQr7vVzbr1ReM4W96JUMstuo1OVDvM59xlLRTJ2cnX2Km69p+BvduptBhf7ffTiSPJKwtTcek+QfvPKR1jsKDxGrTKSk+BbfqjaeepCadI1S70EH7/YflAsehQeJZZVma8FTbJ6fZRgCvL/5IoNk75nfjCXNY7C48wN5ig2/Db9bF4w7VF48x9A9MRfbLietUdh7ad+d2ROXZpPQrKx3pg+rWieUoVfhdUJJ4SSxdv/VkjKfHeZKtXVx9+MRdPEN4Gcoh+pj1JUM16ezgba+vg7RUXu/fHsj1tfP6X+6gy78UekTeOVy3xKVY5/Wp8LseX58Uu7cviB/o/H+K+nSg/VqP9qcI6p+XOV/iPLrIaR7EtT//GEf8Vi/eFxRfdx6NcXr/dszhgz/xe/8wYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUOcfFFcs7GwyBJ0AAAAASUVORK5CYII=" alt="logo" />
                    <button id="new&feautured"> New & Featured </button>
                    <button id="men"> Men </button>
                    <button id="woman"> Woman </button>
                    <button id="kids"> Kids </button>
                    <button id="customise"> Customise </button>
                    <button id="sneakers"> SNKRS </button>
                    <div className="end">
                    <i className="fas fa-search search"></i>
                    <input type="text" id="search" placeholder="Search" ></input>
                    <i className="fa-regular fa-heart large"></i>
                    </div>
            </div>
        </>
    )
}

