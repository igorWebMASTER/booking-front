import styled from "styled-components";

export const FeaturedContainer = styled.div`
    width: 100%;
    margin:4rem auto;
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    gap:20px;
` 

export const FeaturedItem = styled.div`
    width: 100%;
    image-rendering: crisp-edges;
    object-fit: cover;
` 

export const FeaturedItemTitle = styled.div`
    position: relative;
    color: white;
    border-radius: 5px;
    overflow: hidden;
    height: 250px;
` 