import React from "react";
import { Link , useMatch, useResolvedPath} from "react-router-dom";
export default function navbar()
{
    return(
        <nav className = "nav">
            <Link to = "/" className = "myProfile">My Profile</Link>
            <ul>
                <CustomLink to = "/AboutMe">About Me</CustomLink>
                <CustomLink to = "/universityLife">University Life</CustomLink>
                <CustomLink to = "/Experience">Experience</CustomLink>
                <CustomLink to = "/myGrades">My Grades</CustomLink>
            </ul>
        </nav>
    )  
}

function CustomLink({to, children, ...props })
{
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    const path = window.location.pathname;
    return(
        <li className = {isActive ? "active" : ""}>
            <Link to = {to} {...props}>{children}</Link>
        </li>
    )
}