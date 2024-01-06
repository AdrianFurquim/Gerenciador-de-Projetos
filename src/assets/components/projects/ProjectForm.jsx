import { useEffect, useState } from "react"

import Input from "../form/Input"
import Select from "../form/Select"
import SubmitButton from "../form/SubmitButton"
import styled from "./ProjectForm.module.css"

export default function ProjectForm({ handleSubmit, btnText, projectData }) {

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch((err) => (console.log("deu erro" + err)))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        console.log(project)
        handleSubmit(project)
    }

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })
    }

    function handleCategory(e) {
        setProject({
            ...project, category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            }
        })
    }

    return (
        <form onSubmit={submit} className={styled.form}>

            <Input
                type="text"
                name="name"
                placeholder="Insira o nome do projeto"
                text="Nome do Projeto"
                handleOnChange={handleChange} 
                value={project.name ? project.name: ''}/>

            <Input
                type="number"
                name="budget"
                placeholder="Insira o orcamento total"
                text="Orcamento do Projeto"
                handleOnChange={handleChange} 
                value={project.budget ? project.budget: ''}
                />

            <Select
                name="category_id"
                text="Selecione a categoria"
                options={categories}
                handleOnChange={handleCategory}
                value={project.category ? project.category.id : ''} />

            <SubmitButton text={btnText} />
        </form>
    )
}