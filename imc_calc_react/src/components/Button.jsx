import './Button.css'

const Button = ({id, text, action}) => {

  //recebe uma função como parâmetro e à executa
  const handleAction = (e) => {
    action(e)
  }
  return (
    <>
      <button id={id} onClick={handleAction}>
        {text}
      </button>
    </>
  )
}

export default Button
