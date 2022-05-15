import './App.css';
import SVGICON from './Icon';
import IconPaths from './Icon/Icon';

function App() {
  return (
    <>
      <div className="info-section">
        <h1 className='info-section__header'>Selected Fluent Icon for Manager App</h1>
        <div className="usage-info">
            <pre>
              {
` <SVGICON
    iconName={'Desired Icon Name (Copy it from bottom Icon Cards)'}
    size={'Any Number (make sure it fits your screen)'}
    className={'Your call'}
    color={'Any color format you know'}
  /> `
              }
            </pre>
        </div>
        <p className='tutorial-msg'>To add more icons: Umm, feeling lazy to type out the tutorial, please call me instead 🤪🤪🤪🤪 or figure it yourself, you are already a genius, aren't you?</p>
      </div>
      <div className="icon-container">
        { 
          Object.entries(IconPaths).map((t,k) =>{
            return(          
              <div className='icon-group'>
                <SVGICON iconName={t[0]} size="32" className="icon"/>
                <p className='icon-name'>{t[0]}</p>
              </div>
            )
          }
          )
        }
      </div>
    </>
  );
}

export default App;
