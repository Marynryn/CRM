import AddCompanyButton from './components/add-company-button';
import { ClientComponent } from './components/client-compponent';
import ServerComponent from './components/server-component';
import StatusLabel, { Status } from './components/status-label';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <AddCompanyButton />
      <ServerComponent />
      <ClientComponent />
    </main>
  );
}
