import { Navigate, Route, Routes } from 'react-router-dom'

import { AppShell } from './components/panels/AppShell'
import { AuthPlaceholder } from './screens/AuthPlaceholder'
import { StagePlaceholder } from './screens/StagePlaceholder'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/sign-in" element={<AuthPlaceholder title="route.signIn" />} />
      <Route path="/verify" element={<AuthPlaceholder title="route.verify" />} />
      <Route element={<AppShell />}>
        <Route path="/dashboard" element={<StagePlaceholder title="nav.overview" />} />
        <Route path="/holdings" element={<StagePlaceholder title="nav.holdings" />} />
        <Route path="/transactions" element={<StagePlaceholder title="nav.transactions" />} />
        <Route path="/account" element={<StagePlaceholder title="nav.account" />} />
        <Route path="/contact" element={<StagePlaceholder title="nav.contact" />} />
      </Route>
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  )
}
