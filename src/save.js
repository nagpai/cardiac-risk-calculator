/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText, RadioControl } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
	return (
		<div { ...useBlockProps.save() }>
			<RichText.Content
				tagName="h3"
				value={ attributes.title }
			/>
			<form name="calculator" id="calculator" action="#" method="post">
				<label for="gender">Gender:</label><br />
				<input type="radio" name="gender" id="male" value="male" required /> <label for="male">Male</label><br />
				<input type="radio" name="gender" id="female" value="female" required /><label for="female">Female</label><br /><br />

				<label for="age">Age (in years): </label>
				<input type="number" name="age" id="age" min="18" required /> <br /><br />

				<label for="tc">Total Cholestrol (mg/dl):</label>
				<input type="number" name="tc" id="tc" step="0.01" required /><br /><br />

				<label for="hdl">HDL levels (mg/dl):</label>
				<input type="number" name="hdl" id="hdl" step="0.01" required /><br /><br />

				<label for="bp">Systolic Blood Pressure (mmHg):</label>
				<input type="number" name="bp" id="bp" step="1" required /><br /><br />

				<label for="diabetic">Are you diabetic?</label><br />
				<input type="radio" name="diabetic" id="dia-yes" value="yes" required />
				<label for="dia-yes">Yes</label><br />
				<input type="radio" name="diabetic" id="dia-no" value="no" required />
				<label for="dia-no">No</label><br /><br />

				<label for="smoke">Do you smoke?</label><br />
				<input type="radio" name="smoke" id="smoke-yes" value="yes" required />
				<label for="smoke-yes">Yes</label><br />
				<input type="radio" name="smoke" id="smoke-no" value="no" required />
				<label for="smoke-no">No</label><br /><br />

				<button type="submit" id="submit">Submit</button>
			</form>
		</div>
	);
}
