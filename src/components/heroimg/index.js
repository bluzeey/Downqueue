import React from "react";
import {Title,Paragraph,Button,Container,Image,Inner} from "./styles/heroimg"


export default function HeroImg({children,...restProps}){
  return <Container {...restProps}>{children}</Container>
}
HeroImg.Title= function HeroImgTitle({children,...restProps}){
  return <Title {...restProps}>{children}</Title>
}
HeroImg.Paragraph= function HeroImgParagraph({children,...restProps}){
  return <Paragraph {...restProps}>{children}</Paragraph>
}
HeroImg.Image= function HeroImgImage({children,...restProps}){
  return <Image {...restProps}/>
}
HeroImg.Button= function HeroImgButton({children,...restProps}){
  return <Button {...restProps}>{children}</Button>
}
HeroImg.Inner=function HeroImgInner({children,...restProps}){
  return <Inner {...restProps}>{children}</Inner>
}
