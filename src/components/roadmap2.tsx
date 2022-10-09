import styles from "./roadmap2.less";
import Card from "../components/roadmap/card";
import LineImage from "../assets/line.png";

export default function Roadmap() {
  return (
    <div className={styles.roadmap}>
      <div className={styles.roadmapTitle}>Roadmap</div>
      <div className={styles.roadmapBody}>
        <div className={styles.navLine}>
          <img src={LineImage} />
        </div>
        <div className={styles.roadmapContent}>
          <Card title="Phrase 0" subTitle="Foundation: IMOTAI">
            <div className={styles.section}>
              <div className={styles.content}>
                DB3 is aim to be a decentralized database that allow user in
                control of their own data in any kind of dApps. It is need to be
                process step by step in order to achieve the goal. IMOTAI is the
                first stage of DB3 in which our purpose is to deliver a basic
                version of decentralized database which is capable of
                interacting with dApps in a proper way. IMOTAI era will see the
                delivery of Main chain and a shard of data storage chain. The
                main chain is the key role of maintain the safety of the whole
                system. *Check this article to get elaborate info.* The data
                storage chain is responsible for data availability and execution
                of SQL. On top of that, account model to access the control of
                data and a token to keep the network safe are indispensable.
                Therefore, a wallet or a Db3 station that act as a manager of
                DB3 account will be introduced at IMOTAI era. Here is brief work
                scope of IMOTAI era includes:
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.title}>IMOTAI CONSENSUS PROTOCOL</div>
              <div className={styles.content}>
                Consensus protocol is core concept in any decentralized
                blockchain. Db3’s consensus protocol is called IMOTAI CONSENSUS
                PROTOCOL which is originated from classic Fault-tolerant
                Byzantine consensus protocol but in a succinct way.
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.title}>IMOTAI CONSENSUS PROTOCOL</div>
              <div className={styles.content}>
                Application has an obligation to keep users data safe and use
                users data in a transparent way.DVM is the solution for
                transparence. DVM is where smart contract executed and the
                contract defines how the app would use users data. Every
                contract written by developers of dApps is open sourced to the
                public.
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.title}>OPTIMIZED DATABASE ENGINE</div>
              <div className={styles.content}>
                Database engine is the key factor for SQL query. The very first
                version of DB3 database engine is based on SQLite but will be
                soon replaced by self-developed SQL engine for a better
                performance.
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.title}>FULL DATA STORAGE</div>
              <div className={styles.content}>
                Every node in db3 network is required to store full data at
                IMOTAI era since every time a SQL is execute it happened only
                inside one node and this one node have to be able to provide
                full data. However, data block size and blockchain safety has
                alway been contradictory.
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.title}>DB3 NATIVE CRYPTOCURRENCY</div>
              <div className={styles.content}>
                We will introduce a native token symboled as DB3. Db3 network
                has and must has its own currency to inspire miners and
                validators. So, the network safety is count on the mechanism. In
                addition, DB3 the basic currency to pay for data storage and SQL
                execution.
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.title}>DB3 USER STATION</div>
              <div className={styles.content}>
                Db3 station can be easily considered as a user data management
                platform that developed by db3 official team. With the station
                users is able to manage things including but not limited to DB3
                token balance, token staking info, personal data generated by
                other dApps.
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.title}>DB3 NETWORK BLOCK EXPLORER</div>
              <div className={styles.content}>
                The Block Explorer allows users to see information about the
                latest transactions. Searches can be made on addresses,
                transactions, epochs, and slots on the DB3 network.
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.title}>D-WALLET</div>
              <div className={styles.content}>
                D-wallet is a light wallet that developed by db3 official team.
                The wallet will be frequently used a agent so sign transactions
                on the network
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.title}>IMOTAI TESTNET</div>
              <div className={styles.content}>
                IMOTAI test net is a free to use blockchain that is designing
                for purposes of testing.
              </div>
            </div>
          </Card>

          <Card title="Phrase 1" subTitle="Decentralization: MUX">
            <div className={styles.section}>
              <div className={styles.content}>
                Decentralization is the main theme in the MUX era.
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.content}>
                During IMOTAI era the network will be federated just like many
                other POS chain at their early stage, but as the **MUX** era
                progresses more and more nodes will join and db3 network shift
                towards being run by community.
              </div>
            </div>
            …..
            <div className={styles.section}>
              <div className={styles.content}>…..</div>
            </div>
            <div className={styles.section}>
              <div className={styles.content}>
                Brief work scope of IMOTAI era includes:
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.title}>STAKE POOLS</div>
            </div>
            <div className={styles.section}>
              <div className={styles.title}>ADVANCED USER STATION</div>
            </div>
          </Card>

          <Card title="Phrase 2" subTitle="Scaling： ALIBABA">
            <div className={styles.section}>
              <div className={styles.content}>
                The ALIBABA era of DB3 is an era of optimization, improving the
                scalability and interoperability of the network. Previous
                development eras focused on decentralization and new
                functionality, ALIBABA is about improving the underlying
                performance of the DB3 network to better support growth and
                adoption for applications with high transaction volume.
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
