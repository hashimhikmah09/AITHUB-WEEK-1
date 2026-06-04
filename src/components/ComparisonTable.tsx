export default function ComparisonTable({
  companies,
}: {
  companies: any[];
}) {
  return (
    <div className="overflow-x-auto mt-10">
      <table className="min-w-full border border-gray-200">
        <thead>
          <tr>
            <th className="border p-3 bg-gray-100">
              Features
            </th>

            {companies.map((company) => (
              <th
                key={company.id}
                className="border p-3 bg-gray-100"
              >
                {company.name}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {/* RATING */}

          <tr>
            <td className="border p-3 font-semibold">
              Rating
            </td>

            {companies.map((company) => (
              <td
                key={company.id}
                className="border p-3"
              >
                ⭐ {company.rating}
              </td>
            ))}
          </tr>

          {/* DESCRIPTION */}

          <tr>
            <td className="border p-3 font-semibold">
              Description
            </td>

            {companies.map((company) => (
              <td
                key={company.id}
                className="border p-3"
              >
                {company.description}
              </td>
            ))}
          </tr>

          {/* LOCATION */}

          <tr>
            <td className="border p-3 font-semibold">
              Location
            </td>

            {companies.map((company) => (
              <td
                key={company.id}
                className="border p-3"
              >
                📍 {company.location}
              </td>
            ))}
          </tr>

          {/* RESPONSE TIME */}

          <tr>
            <td className="border p-3 font-semibold">
              Response Time
            </td>

            {companies.map((company) => (
              <td
                key={company.id}
                className="border p-3"
              >
                {company.responseTime ||
                  "2 hrs"}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}