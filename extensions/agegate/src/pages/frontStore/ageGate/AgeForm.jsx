import { Field } from '@components/common/form/Field';
import { Form } from '@components/common/form/Form';
import PropTypes from 'prop-types';
import React from 'react';
import { toast } from 'react-toastify';
import { _ } from '@evershop/evershop/lib/locale/translate';

function AgeForm({ action, homeUrl, failurePageUrl, setting: { minAge } }) {
  return (
    <div className="page-width p-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8 border border-gray-200">
        <Form
          id="ageForm"
          action={action}
          method="POST"
          onSuccess={(response) => {
            if (!response.error) {
              if (response.data.passed) {
                window.location.href = homeUrl;
              } else {
                window.location.href = failurePageUrl;
              }
            } else {
              toast.error(_('Something wrong. Please try again later'));
            }
          }}
          btnText={_('Submit')}
        >
          <div className="text-center mb-6">
            <div className="mb-4">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Errection.org
              </h1>
              <p className="text-sm text-gray-600 italic">
                {_('Your premium destination for discerning gentlemen')}
              </p>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              {_('Age Verification')}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {_('We only allow users who are ${minAge} years and above. Please enter your age to proceed.', { minAge })}
            </p>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {_('Age')}
            </label>
            <Field
              type="number"
              name="age"
              placeholder="25"
              min={minAge}
              max="99"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-center text-lg"
              validationRules={['notEmpty']}
            />
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-500 mb-4">
              {_('Discreet and confidential service')} • {_('Privacy guaranteed')}
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}

AgeForm.propTypes = {
  action: PropTypes.string.isRequired,
  homeUrl: PropTypes.string.isRequired,
  failurePageUrl: PropTypes.string.isRequired,
  setting: PropTypes.shape({
    minAge: PropTypes.number.isRequired
  }).isRequired
};

export const layout = {
  areaId: 'content',
  sortOrder: 1
};

export const query = `
  query Query {
    action: url(routeId: "verifyAge"),
    homeUrl: url(routeId: "homepage"),
    failurePageUrl: url(routeId: "ageVerifyFailure"),
    setting {
      minAge
    }
  }
`;

export default AgeForm;
