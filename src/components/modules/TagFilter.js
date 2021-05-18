import React, { useContext } from 'react'
import { TagContext } from '../../contexts/TagContext'
import * as TagFilterStyles from './TagFilter.module.scss'

const TagFilter = ({data}) => {
    const { tag, setTag } = useContext(TagContext)

    const tagAction = (ts, index) => {
        setTag({id: index, tagged: ts})
    }

    return (
        <div className={TagFilterStyles.container}>
            <ul className={TagFilterStyles.wrapper}>
                {data.map((dat, index) => (
                    <li key={index}><button 
                        className={
                            index === tag.id ? TagFilterStyles.selectedTag : ""
                        }
                      onClick={() => tagAction(dat, index)}>{dat}</button></li>
                ))}
                {/* <li><button onClick={() => tagAction("Illustration")}>Illustration</button></li>
                <li><button onClick={() => tagAction("Photography")}>Photography</button></li> */}
            </ul>
        </div>
    )
}

export default TagFilter