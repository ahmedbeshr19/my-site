import { addDocument } from '../firebase/db'

function trackEvent(eventName, metadata = {}) {
  const data = {
    event: eventName,
    timestamp: new Date().toISOString(),
    page: window.location.pathname + window.location.hash,
    userAgent: navigator.userAgent?.slice(0, 200),
    ...metadata,
  }
  addDocument('events', data)
}

export { trackEvent }
