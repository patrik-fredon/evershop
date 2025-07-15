import { EvershopRequest } from '@evershop/evershop/types';
import { setContextValue } from '@evershop/evershop/graphql/services';
import { translate } from '@evershop/evershop/lib/locale/translate';

export default (request: EvershopRequest) => {
  setContextValue(request, 'pageInfo', {
    title: translate('Age Gate - Please verify your age to continue'),
    description: translate('Please verify your age to continue visiting our exclusive shop'),
    url: request.url
  });
};
