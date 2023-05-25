import { UsersProps } from '@/types/users'
import Image from 'next/image'

export function Table({ users }: UsersProps) {
  return (
    <>
      <div className="p-5 h-full bg-gray-100">
        <table className="bg-gray-50 border-b-2 border-gray-200 w-full">
          <thead>
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Avatar
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Login
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Date
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Admin
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {users.map((user) => (
              <tr key={user.id} className="bg-white">
                <td className="p-3 text-sm text-gray-700">
                  <Image
                    className="rounded-full"
                    src={user.avatar_url}
                    width={50}
                    height={50}
                    alt="Picture of the author"
                  />
                </td>
                <td className="p-3 text-sm text-gray-700">
                  <a
                    href=""
                    className="font-bold text-blue-500 hover:underline"
                  >
                    {user.login}
                  </a>
                </td>
                <td className="p-3 text-sm text-gray-700">Teste 3</td>
                <td className="p-3 text-sm text-gray-700">
                  {' '}
                  {user.site_admin ? (
                    <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                      Sim
                    </span>
                  ) : (
                    <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">
                      Não
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
