import { useEffect, useState } from "react"

interface SkillsProps {
    skills: string[]
}

const Skills = ({ skills }: SkillsProps) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setIsLoggedIn(true)
        }, 1500)
    })

    return (
        <>
            <ul>
                {skills.map(skill => <li key={skill}>{skill}</li>)}
            </ul>

            {isLoggedIn ? <button>Start Learning</button> : <button onClick={() => setIsLoggedIn(true)}> Login </button>}
        </>
    )
}

export default Skills