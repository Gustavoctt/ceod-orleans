import styles from './ButtonLink.module.css';

export function ButtonLink(props){
  return(
    <a 
      href={props.url} target="_blank"
    >
      {props.title}
    </a>
  )
}