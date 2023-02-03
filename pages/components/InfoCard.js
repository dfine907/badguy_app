import React from 'react'
import Link from 'next/link'

const InfoCard = ({
  pix,
  remarks,
  description,
  warning,
  link,
  setPoi,
}) => {
  return (
    <div bg-blue-500>
      <div className="flex items-center h-screen w-full justify-center">
        <div className="max-w-xs">
          <div className="bg-white shadow-xl rounded-lg py-3">
            <div className="photo-wrapper p-2">
              <img
                className="w-32 h-32 rounded-full mx-auto"
                src={pix}
                alt="person of interest pix"
              />
            </div>
            <div className="p-2">
              <div className="text-center text-gray-400 text-xs font-semibold">
                <div
                  dangerouslySetInnerHTML={{
                    __html: remarks,
                  }}
                ></div>
              </div>
              <table className="text-xs my-3">
                <tbody>
                  {description && (
                    <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">
                        description
                      </td>
                      <td className="px-2 py-2">{description}</td>
                    </tr>
                  )}
                  {warning && <p>{warning}</p>}
                </tbody>
              </table>

              {link && (
                <div onClick={setPoi} className="text-center my-3">
                  <Link
                    className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                    href={link}
                  >
                    View Profile
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoCard
