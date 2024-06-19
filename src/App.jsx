import { useEffect, useState } from 'react'
import './App.css'
import { IconBxRefresh } from './components/IconBxRefresh';

function App() {
  const [data, setData] = useState([])
  const [formValues, setFormValues] = useState(
    {
      as2From: null,
      fromDate: null,
      toDate: null,
      eventType: null,
      displayOk: true,
      displayFailed: true
    })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  function formatDate(date) {
    if (!(date instanceof Date)) {
        date = new Date(date);
    }

    const dateOptions = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    };

    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    };

    const formattedDate = date.toLocaleDateString('es-ES', dateOptions);
    const formattedTime = date.toLocaleTimeString('es-ES', timeOptions);

    return `${formattedDate}, ${formattedTime}`;
  }

  const fetchData = (payload) => {
    setLoading(true)
    fetch(import.meta.env.VITE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then(response => {
      if(response.status === 204) return []
      return response.json()
    })
    .then(data => {
      setData(data)
    })
    .catch((e) => {
      console.log(e)
      setError(true)
    })
    .finally(() => {
      setLoading(false)
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    fetchData(formValues)
  }

  const onChange = (e) => {
    let newValue
    if(e.target.name === 'as2From') {
      if(e.target.value && e.target.value.trim()!== ""){
        newValue = {
          ...formValues,
          [e.target.name]: e.target.value
        }
      } else {
        newValue = {
          ...formValues,
          [e.target.name]: null
        }
      }
      setFormValues(newValue)
    } else if(e.target.name.includes("Date")) {
      if(e.target.value){
        newValue = {
          ...formValues,
          [e.target.name]: new Date(e.target.value).toISOString()
        }
      }else{
        newValue = {
          ...formValues,
          [e.target.name]: null
        }
      }
      setFormValues(newValue)
      fetchData(newValue)
    } else if(e.target.checked !== undefined) {
      const newValue = {
        ...formValues,
        [e.target.name]: e.target.checked
      }
      setFormValues(newValue)
      fetchData(newValue)
    } else {
      newValue = {
        ...formValues,
        [e.target.name]: e.target.value === 'Todos' ? null : e.target.value
      }
      setFormValues(newValue)
      fetchData(newValue)
    }
  }

  useEffect(() => {
    fetchData(formValues)
  },[])

  return (
    <main>
      <form
        onSubmit={onSubmit}
        onChange={onChange}
        style={{display: 'flex', gap: 20}}
      >
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <button style={{width: 100, height: 60}} disabled={loading}>
            <IconBxRefresh fill="green" height="2em" width="2em"/>
            <p style={{fontSize: 16}}>Refresh</p>
          </button>
        </div>
        <div style={{display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(235px, 1fr))', flex: 1}}>
          <div style={{display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'space-around'}}>
            <label style={{display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center'}}>
              <p>Sender:</p>
              <input name='as2From' style={{height: 30, paddingLeft: 5, flex: 1}} disabled={loading}/>
            </label>
            <label style={{display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center'}}>
              <p>Event Type:</p>
              <select name='eventType' style={{height: 30, paddingLeft: 5, flex: 1}} disabled={loading} defaultValue='Todos'>
                <option value='Send'>Envío</option>
                <option value='Receive'>Recepción</option>
                <option value='Todos'>Todos</option>
              </select>
            </label>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'space-around'}}>
            <label style={{display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center'}}>
              <p style={{width: 80}}>Date From:</p>
              <input type='date' name='fromDate' onClick={(e) => {e.target.showPicker()}} style={{height: 30, paddingLeft: 5, flex: 1}} disabled={loading}></input>
            </label>
            <label style={{display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center'}}>
              <p style={{width: 80}}>Date To:</p>
              <input type='date' name='toDate' onClick={(e) => {e.target.showPicker()}} style={{height: 30, paddingLeft: 5, flex: 1}} disabled={loading}></input>
            </label>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
            <label style={{display: 'flex', gap: 5, alignItems: 'center'}}>
              <input type='checkbox' name='displayOk' style={{height: 20, width: 20}} disabled={loading} defaultChecked></input>
              <div style={{width: 15, height: 15, display: 'inline-block', backgroundColor: 'green'}}></div><p>Display Ok</p>
            </label>
            <label style={{display: 'flex', gap: 5, alignItems: 'center'}}>
              <input type='checkbox' name='displayFailed' style={{height: 20, width: 20}} disabled={loading} defaultChecked></input>
              <div style={{width: 15, height: 15, display: 'inline-block', backgroundColor: 'red'}}></div>
              <p>Display Error</p>
            </label>
          </div>
        </div>
      </form>
      <section>
        <div className='table-wrapper'>
          <table style={{width: '100%', borderCollapse: "collapse"}}>
            <thead style={{backgroundColor: "#F3F3F3", height: 40}}>
              <tr>
                <th>Status</th>
                <th style={{width: 170}}>Timestamp</th>
                <th>Local</th>
                <th>Remote</th>
                <th>Message ID</th>
                <th>Payload</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              {
                loading ? <tr><td colSpan="100%" style={{textAlign: 'center', padding: "5px"}}><div className='spinner'></div></td></tr> :
                error ? <tr><td colSpan="100%" style={{textAlign: 'center', padding: "5px"}}><strong>Ocurrió un error</strong></td></tr> :
                data.length === 0 ? <tr><td colSpan="100%" style={{textAlign: 'center', padding: "5px"}}><strong>No se encontraron registros</strong></td></tr> :
                data.map((row, index) => (
                  <tr key={row.id} style={{backgroundColor: `${index % 2 !== 0 ? "#F3F3F3" : '#FFFFFF'}`, height: 40}}>
                    <td style={{textAlign: 'center'}}><div style={{width: 20, height: 20, display: 'inline-block', borderRadius: 4, backgroundColor: row.status === 'Error' ? 'red' : 'green' }}></div></td>
                    <td><span style={{width: 150, display: 'inline-block'}}>{formatDate(row.eventDate)}</span></td>
                    <td>{row.senderAs2Id}</td>
                    <td>{row.receiverAs2Id}</td>
                    <td>{row.messageId}</td>
                    <td>{row.payload.slice(0, 10)}</td>
                    <td><span className={row.eventMessage ? 'event_message' : ''} title={row.eventMessage ?? ''}>{row.eventMessage}</span></td>
                  </tr>
                ))
              }

          </tbody>
          </table>
        </div>
      </section>
      <footer style={{border: "1px solid #D0D0D0", display: 'flex', gap: 10, padding: 10, borderRadius: 4}}>
        <div style={{display: 'flex', gap: 5}}>
          <div style={{width: 20, height: 20, display: 'inline-block', borderRadius: 4, border: '1px solid #D0D0D0'}}></div>
          <p>
            {data.length}
          </p>
        </div>
        <div style={{display: 'flex', gap: 5}}>
          <div style={{width: 20, height: 20, display: 'inline-block', borderRadius: 4, backgroundColor: 'green'}}></div>
          <p>
            {data.filter(row => row.status === 'Ok').length}
          </p>
          </div>
        <div style={{display: 'flex', gap: 5}}>
          <div style={{width: 20, height: 20, display: 'inline-block', borderRadius: 4, backgroundColor: 'red'}}></div>
          <p>
          {data.filter(row => row.status === 'Error').length}
          </p>
        </div>
      </footer>
    </main>
  )
}

export default App
