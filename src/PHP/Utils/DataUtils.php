<?php

namespace JSAP\PHP\Utils;

use JSAP\PHP\Utils\ApiUtils;

interface IDataProvider {
    public function purchaseData($phoneNumber, $amount);
    public function getPricing();
}

class DataUtils {
    private $provider;

    public function __construct(IDataProvider $provider) {
        $this->provider = $provider;
    }

    public function purchaseData($phoneNumber, $amount) {
        return $this->provider->purchaseData($phoneNumber, $amount);
    }

    public function getPricing() {
        return $this->provider->getPricing();
    }
}

class PaystackDataProvider implements IDataProvider {
    private $apiKey;

    public function __construct($apiKey) {
        $this->apiKey = $apiKey;
    }

    public function purchaseData($phoneNumber, $amount) {
        $url = 'https://api.paystack.co/data/purchase';
        $data = [
            'phone' => $phoneNumber,
            'amount' => $amount
        ];
        return ApiUtils::sendPostRequest($url, $data, $this->apiKey);
    }

    public function getPricing() {
        $url = 'https://api.paystack.co/data/pricing';
        return ApiUtils::sendGetRequest($url, $this->apiKey);
    }
}

class FlutterwaveDataProvider implements IDataProvider {
    private $apiKey;

    public function __construct($apiKey) {
        $this->apiKey = $apiKey;
    }

    public function purchaseData($phoneNumber, $amount) {
        $url = 'https://api.flutterwave.com/v3/bills';
        $data = [
            'country' => 'NG',
            'customer' => $phoneNumber,
            'amount' => $amount,
            'recurrence' => 'ONCE',
            'type' => 'DATA'
        ];
        return ApiUtils::sendPostRequest($url, $data, $this->apiKey);
    }

    public function getPricing() {
        $url = 'https://api.flutterwave.com/v3/bill-categories';
        return ApiUtils::sendGetRequest($url, $this->apiKey);
    }
}


?>