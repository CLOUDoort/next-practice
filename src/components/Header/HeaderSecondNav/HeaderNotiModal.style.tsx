import styled from '@emotion/styled'

type transitionProps = {
    transition: boolean
}
export const HeaderNotiModalContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
`
export const HeaderNotiModalBox = styled.div<transitionProps>`
    position: absolute;
    width: 25rem;
    height: 31.2rem;
    background-color: white;
    top: 4.3rem;
    right: 15.1rem;
    border-radius: 0.3rem;
    opacity: ${(props) => props.transition ? 1 : 0};
    transition: opacity 0.3s;
    color: black;
    padding: 0.3rem;
    > :first-of-type {
        margin: 0.7rem;
    }
`

export const HeaderNotiModalList = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.25rem;
    padding: 0.7rem;
    border-radius: 0.3rem;
    :hover {
        background-color: rgba(128, 128, 128, 0.4);
    }
    > div > span {
        border-radius: 50%;
        object-fit: scale-down;
    }

    > div {
        display: flex;
        > div {
        font-size: 0.8rem;
        display: flex;
        align-items: center;
        > div {
            margin-left: 0.3rem;
        }
    }
    }
    
`
type HeaderNotiProps = {
    number: number
}

export const HeaderNotiNum = styled.div<HeaderNotiProps>`
display: ${(props) => props.number ? 'block' : 'none'};
position: absolute;
background-color: ${(props) => props.number ? "#ff3232" : null} ;
border-radius: 50%;
padding: 1px 0.6rem;
top: 1rem;
right: 14.9rem;
`