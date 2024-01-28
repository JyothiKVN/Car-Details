function AddCarDetailsComponent(props: any) {
  return (
    <div style={{ textAlign: "left" }}>
      <h2>AddCarDetailsComponent</h2>
      <table>
        <tr>
          <td>model </td>
          <td>
            <input type="text" value={props.selectedModel} />
          </td>
        </tr>
        <tr>
          <td>color</td>
          <td>
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td>yearofmanufacutre</td>
          <td>
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td>insturancevalid</td>
          <td>
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td>kmsran</td>
          <td>
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td>location</td>
          <td>
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td>owners</td>
          <td>
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td>transmission</td>
          <td>
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td>bodytype</td>
          <td>
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td>budget</td>
          <td>
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td>photo</td>
          <td>
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td>fueltype</td>
          <td>
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td colspan="2">&nbsp;</td>
        </tr>
        <tr>
          <td colspan="2" style={{ textAlign: "center" }}>
            <button onClick={props.closeAddForm}>Submit</button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default AddCarDetailsComponent;
