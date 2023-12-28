# Kafka Deep Dive Application (Node.js)

## Overview

This Node.js application provides a comprehensive way to interact with Apache Kafka topics, including producer, consumer, and administrative operations. It allows you to create, manage, and consume messages from Kafka topics, and provides a user-friendly interface for real-time data processing and analysis.

## Features

* **Producer:**
    * Publish messages to Kafka topics.
    * Specify message key and value.
    * Set partition strategy (round robin, key-based, etc.).
* **Consumer:**
    * Subscribe to Kafka topics.
    * Consume messages from multiple partitions in parallel.
    * Handle message acknowledgments (ACKs) and failures.
* **Administration:**
    * Create and delete Kafka topics.
    * Modify topic configurations (partitions, replication factor, etc.).
    * List topics, partitions, and consumer groups.

## Prerequisites

* Apache Kafka installed and running
* Node.js 18 or later
* npm

## Installation

1. Clone the repository: `git clone git@github.com:Ryrahul/Apache-Kafka-DeepDive.git`
2. Navigate to the project directory: `cd kafka-deep-dive-application`
3. Install the dependencies: `npm install`


## License

This application is licensed under the MIT License.