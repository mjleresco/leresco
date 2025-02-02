<?php

namespace JSAP\PHP\Utils;

use JSAP\PHP\Utils\ApiUtils;

interface IAirtimeProvider {
    public function purchaseAirtime($phoneNumber, $amount);
    public function getPricing();
}

class AirtimeUtils {
    private $provider;

    public function __construct(IAirtimeProvider $provider) {
        $this->provider = $provider;
    }

    public function purchaseAirtime($phoneNumber, $amount) {
        return $this->provider->purchaseAirtime($phoneNumber, $amount);
    }

    public function getPricing() {
        return $this->provider->getPricing();
    }
}

class PaystackAirtimeProvider implements IAirtimeProvider {
    private $apiKey;

    public function __construct($apiKey) {
        $this->apiKey = $apiKey;
    }

    public function purchaseAirtime($phoneNumber, $amount) {
        $url = 'https://api.paystack.co/airtime/purchase';
        $data = [
            'phone' => $phoneNumber,
            'amount' => $amount
        ];
        return ApiUtils::sendPostRequest($url, $data, $this->apiKey);
    }

    public function getPricing() {
        $url = 'https://api.paystack.co/airtime/pricing';
        return ApiUtils::sendGetRequest($url, $this->apiKey);
    }
}

class FlutterwaveAirtimeProvider implements IAirtimeProvider {
    private $apiKey;

    public function __construct($apiKey) {
        $this->apiKey = $apiKey;
    }

    public function purchaseAirtime($phoneNumber, $amount) {
        $url = 'https://api.flutterwave.com/v3/bills';
        $data = [
            'country' => 'NG',
            'customer' => $phoneNumber,
            'amount' => $amount,
            'recurrence' => 'ONCE',
            'type' => 'AIRTIME'
        ];
        return ApiUtils::sendPostRequest($url, $data, $this->apiKey);
    }

    public function getPricing() {
        $url = 'https://api.flutterwave.com/v3/bill-categories';
        return ApiUtils::sendGetRequest($url, $this->apiKey);
    }
}


?>