const Summary = ({ result }) => {
  return (
    <div>
      {result !== null && (
        <div>
          <div className="mt-8 text-2xl font-bold">Summary</div>
          <table className="mt-4 w-full text-center">
            <tbody>
              <tr>
                <td className="border-2 border-black p-2">Financial Year</td>
                <td className="border-2 border-black p-2">
                  {result.financialYear}
                </td>
              </tr>
              <tr>
                <td className="border-2 border-black p-2">
                  Required Days Abroad
                </td>
                <td className="border-2 border-black p-2">
                  {result.requiredDays}
                </td>
              </tr>
              <tr>
                <td className="border-2 border-black p-2">
                  Your Days Abroad (Valid)
                </td>
                <td className="border-2 border-black p-2">
                  {result.totalValidDays}
                </td>
              </tr>
              <tr>
                <td className="border-2 border-black p-2 font-bold">Status</td>
                <td className="border-2 border-black p-2 font-bold">
                  {result.status}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Summary;
