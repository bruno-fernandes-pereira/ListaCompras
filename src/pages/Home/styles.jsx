import styled from 'styled-components'

export const AddButton = styled.button`
    background: #53b900;
    color: #222222;
    height: 35px;
    padding: 5px 10px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    margin-left: 5px;
    transition: all 0.5s;
    
    &:hover {
        /* font-weight: 600; */
        opacity: 0.8;
    }
`

export const DeleteAllButton = styled.button`
    background: #ec2f00;
    color: #222222;
    height: 35px;
    padding: 5px 10px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    margin-left: 5px;
    transition: all 0.5s;
    
    &:hover {
        /* font-weight: 600; */
        opacity: 0.8;
    }
`

export const TrashButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;
    transition: all 0.5s;
    
    &:hover {
        /* font-weight: 600; */
        opacity: 0.8;
    }
`

export const Container = styled.div`
    background: #009e91;
    padding: 20px;
    border-radius: 10px;
    margin-top: 30px;

    h1 {
        color: #002a69;
        text-align: center;
    }

    input {
        height: 35px;
        border-radius: 5px;
        border: none;
        margin-top: 20px;
        outline: none;
        padding-left: 10px;
    }
`

export const ContainerItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
    color: #002a69;

    p {
        text-transform: capitalize;
        font-size: 20px;
    }
`